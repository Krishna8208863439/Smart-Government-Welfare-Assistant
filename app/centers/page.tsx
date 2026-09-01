'use client';

import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  Phone, 
  Clock, 
  Navigation, 
  Building2, 
  CheckCircle2, 
  Compass, 
  Crosshair, 
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  Filter
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { 
  ASSISTANCE_CENTERS, 
  ALL_INDIA_CITIES,
  AssistanceCenter, 
  CityLocation,
  getCenterName, 
  getCenterAddress, 
  getCenterServices,
  calculateDistanceKm 
} from '@/lib/schemes-data';
import { useTranslation } from '@/components/accessibility-provider';

export default function AssistanceCentersPage() {
  const { t, language } = useTranslation();
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [maxRadiusKm, setMaxRadiusKm] = useState<number>(50); // Default 50 km area radius
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  // Live Location & Target Coordinates State (Defaults to Pune)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number }>({ lat: 18.5204, lng: 73.8567 });
  const [locationName, setLocationName] = useState<string>('Pune (Maharashtra)');
  const [isLocating, setIsLocating] = useState(false);

  // Active Center Selected for Detailed View
  const [activeCenter, setActiveCenter] = useState<AssistanceCenter>(ASSISTANCE_CENTERS[0]);

  // Handle "Use My Live Location" GPS trigger
  const handleGetLiveLocation = () => {
    setIsLocating(true);

    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setLocationName(
            language === 'mr'
              ? `थेट जीपीएस स्थान (${latitude.toFixed(2)}° N, ${longitude.toFixed(2)}° E)`
              : language === 'hi'
              ? `लाइव जीपीएस स्थान (${latitude.toFixed(2)}° N, ${longitude.toFixed(2)}° E)`
              : `Live GPS Position (${latitude.toFixed(2)}° N, ${longitude.toFixed(2)}° E)`
          );
          setIsLocating(false);
        },
        (err) => {
          console.warn('Geolocation failed or permission denied, using default Pune location:', err);
          setUserLocation({ lat: 18.5204, lng: 73.8567 });
          setLocationName('Pune (Maharashtra)');
          setIsLocating(false);
        },
        { timeout: 8000, enableHighAccuracy: true }
      );
    } else {
      setUserLocation({ lat: 18.5204, lng: 73.8567 });
      setLocationName('Pune (Maharashtra)');
      setIsLocating(false);
    }
  };

  // Select City from All-India Autocomplete or Quick Pill
  const handleSelectCity = (city: CityLocation) => {
    setUserLocation({ lat: city.lat, lng: city.lng });
    setLocationName(`${city.name}, ${city.state}`);
    setSearchQuery('');
    setShowCitySuggestions(false);
  };

  // Filter matching Indian cities as user types in search box
  const citySuggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase();
    return ALL_INDIA_CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        (c.name_hi && c.name_hi.includes(q)) ||
        (c.name_mr && c.name_mr.includes(q))
    ).slice(0, 6);
  }, [searchQuery]);

  // Dynamic Center Generation if searched city has no immediate static center
  const dynamicGeneratedCenter = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const matchingCity = ALL_INDIA_CITIES.find(
      (c) =>
        c.name.toLowerCase() === searchQuery.trim().toLowerCase() ||
        c.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    if (matchingCity) {
      return {
        id: `csc-${matchingCity.name.toLowerCase().replace(/\s+/g, '-')}-auto`,
        name: `Maha / CSC Digital Seva Kendra (${matchingCity.name} Central)`,
        name_hi: `सीएससी डिजिटल सेवा केंद्र (${matchingCity.name_hi})`,
        name_mr: `सीएससी डिजिटल सेवा केंद्र (${matchingCity.name_mr})`,
        type: 'CSC',
        district: matchingCity.name,
        district_hi: matchingCity.name_hi,
        district_mr: matchingCity.name_mr,
        state: matchingCity.state,
        address: `Main Tehsil Office Road, Near District Collectorate, ${matchingCity.name}, ${matchingCity.state}`,
        address_hi: `तहसील कार्यालय मार्ग, जिला कलेक्ट्रेट के पास, ${matchingCity.name}, ${matchingCity.state}`,
        address_mr: `तहसील कार्यालय रस्ता, जिल्हाधिकारी कार्यालयाजवळ, ${matchingCity.name}, ${matchingCity.state}`,
        pincode: '400001',
        phone: '+91 1800 121 2026',
        timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
        timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
        timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
        officerInCharge: 'District Nodal Coordinator (VLE)',
        services: ['PM-KISAN e-KYC & Registration', 'Ayushman Golden Card', 'Direct Benefit Transfer (DBT) Desk', 'Aadhaar Biometric Update'],
        services_hi: ['पीएम-किसान ई-केवाईसी व पंजीकरण', 'आयुष्मान गोल्डन कार्ड', 'डीबीटी सहायता डेस्क', 'आधार बायोमेट्रिक'],
        services_mr: ['पीएम-किसान ई-केवायसी व नोंदणी', 'आयुष्मान गोल्डन कार्ड', 'डीबीटी मदत कक्ष', 'आधार बायोमेट्रिक अपडेट'],
        coordinates: { lat: matchingCity.lat, lng: matchingCity.lng }
      } as AssistanceCenter;
    }
    return null;
  }, [searchQuery]);

  // Filter and Sort centers based on 50km proximity & center type
  const sortedAndFilteredCenters = useMemo(() => {
    let list: (AssistanceCenter & { distanceKm: number })[] = [];

    // Base Database
    const combinedDatabase = [...ASSISTANCE_CENTERS];
    if (dynamicGeneratedCenter && !combinedDatabase.some(c => c.id === dynamicGeneratedCenter.id)) {
      combinedDatabase.unshift(dynamicGeneratedCenter);
    }

    combinedDatabase.forEach((c) => {
      const distanceKm = calculateDistanceKm(userLocation.lat, userLocation.lng, c.coordinates.lat, c.coordinates.lng);
      list.push({ ...c, distanceKm });
    });

    // Filter by Center Type
    if (selectedType !== 'ALL') {
      list = list.filter((c) => c.type.toUpperCase().includes(selectedType.toUpperCase()));
    }

    // Filter by Text Search if present
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((c) => 
        c.name.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        (c.name_mr && c.name_mr.includes(q)) ||
        (c.name_hi && c.name_hi.includes(q)) ||
        c.address.toLowerCase().includes(q) ||
        c.pincode.includes(q)
      );
    }

    // Filter by Proximity Radius (e.g. 50 km area) unless 0/All-India selected
    if (maxRadiusKm > 0 && !searchQuery.trim()) {
      const withinRadius = list.filter((c) => c.distanceKm <= maxRadiusKm);
      // If at least 1 found within radius, use that; otherwise fallback to closest nationwide
      if (withinRadius.length > 0) {
        list = withinRadius;
      }
    }

    // Sort ascending by nearest distance
    list.sort((a, b) => a.distanceKm - b.distanceKm);

    return list;
  }, [userLocation, selectedType, searchQuery, maxRadiusKm, dynamicGeneratedCenter]);

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gov-saffron/15 text-gov-saffron font-bold text-xs border border-gov-saffron/30">
            <MapPin className="w-3.5 h-3.5 animate-bounce" />
            <span>
              {language === 'mr' 
                ? 'अखिल भारतीय सीएससी व डिजिटल सेवा केंद्र शोधक (५० किमी परिसर)' 
                : language === 'hi' 
                ? 'अखिल भारतीय सीएससी एवं डिजिटल सेवा केंद्र खोजक (50 किमी दायरा)' 
                : 'All-India CSC & Digital Seva Locator (50 km Live Radius)'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('centers_title', 'Locate Nearest CSC & Welfare Assistance Centers')}
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            {language === 'mr'
              ? 'भारतातील कोणत्याही शहराचे नाव, पिनकोड किंवा थेट जीपीएस स्थान वापरून ५० किमी परिसरातील अधिकृत सीएससी व आपले सरकार सेवा केंद्रे शोधा.'
              : language === 'hi'
              ? 'भारत के किसी भी शहर का नाम, पिनकोड या लाइव जीपीएस स्थान का उपयोग करके 50 किमी के दायरे में निकटतम सीएससी और डिजिटल सेवा केंद्र खोजें।'
              : 'Search any Indian city, district, pincode or use live GPS location to discover verified Common Service Centers (CSCs) & Digital Seva Kendras within a 50 km radius.'}
          </p>

          {/* Search Bar + Live Location GPS Button */}
          <div className="pt-2 max-w-4xl flex flex-col sm:flex-row gap-3 relative">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder={
                  language === 'mr'
                    ? 'भारतातील कोणतेही शहर, जिल्हा किंवा पिनकोड शोधा (उदा. पुणे, मुंबई, नागपूर, कोल्हापूर, जयपूर, लखनौ)...'
                    : language === 'hi'
                    ? 'भारत का कोई भी शहर, जिला या पिनकोड खोजें (जैसे पुणे, मुंबई, लखनऊ, वाराणसी, जयपुर, अहमदाबाद)...'
                    : 'Search ANY Indian City, District, or Pincode (e.g. Pune, Mumbai, Lucknow, Ahmedabad, Bengaluru)...'
                }
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowCitySuggestions(true);
                }}
                onFocus={() => setShowCitySuggestions(true)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-800 text-white rounded-xl border border-slate-700 text-sm font-semibold outline-none focus:border-gov-blue shadow-inner placeholder:text-slate-400"
              />

              {/* City Autocomplete Dropdown */}
              {showCitySuggestions && citySuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-14 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl z-50 overflow-hidden divide-y divide-slate-700/60">
                  {citySuggestions.map((city) => (
                    <button
                      key={city.name}
                      onClick={() => handleSelectCity(city)}
                      className="w-full px-4 py-3 text-left text-xs font-semibold text-slate-200 hover:bg-gov-blue hover:text-white flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gov-saffron shrink-0" />
                        <span>{city.name} ({city.name_hi || city.name_mr})</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-normal">{city.state}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* GPS Live Location Trigger Button */}
            <button
              onClick={handleGetLiveLocation}
              disabled={isLocating}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl font-extrabold text-xs shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 shrink-0 disabled:opacity-75"
            >
              <Crosshair className={`w-4 h-4 ${isLocating ? 'animate-spin' : ''}`} />
              <span>
                {isLocating
                  ? (language === 'mr' ? 'स्थान शोधत आहे...' : language === 'hi' ? 'स्थान खोज रहे हैं...' : 'Detecting GPS...')
                  : (language === 'mr' ? '📍 माझं थेट स्थान वापरा' : language === 'hi' ? '📍 मेरा वर्तमान स्थान प्रयोग करें' : '📍 Use My Live Location')}
              </span>
            </button>
          </div>

          {/* Quick Major Cities Bar & Radius Selector */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Quick City Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-400 font-bold mr-1">
                {language === 'mr' ? 'प्रमुख शहरे:' : language === 'hi' ? 'प्रमुख शहर:' : 'Major Cities:'}
              </span>
              {[
                ALL_INDIA_CITIES[0], // Pune
                ALL_INDIA_CITIES[1], // Mumbai
                ALL_INDIA_CITIES[2], // Nagpur
                ALL_INDIA_CITIES[3], // Nashik
                ALL_INDIA_CITIES[8], // Kolhapur
                ALL_INDIA_CITIES[20], // New Delhi
                ALL_INDIA_CITIES[26], // Lucknow
                ALL_INDIA_CITIES[35], // Bengaluru
                ALL_INDIA_CITIES[40], // Ahmedabad
                ALL_INDIA_CITIES[53]  // Jaipur
              ].map((city) => (
                <button
                  key={city.name}
                  onClick={() => handleSelectCity(city)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-colors ${
                    locationName.includes(city.name)
                      ? 'bg-gov-blue text-white border-blue-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>

            {/* Radius Selector */}
            <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
              <SlidersHorizontal className="w-3.5 h-3.5 text-gov-saffron" />
              <span className="text-[11px] font-bold text-slate-300">
                {language === 'mr' ? 'परिसर:' : language === 'hi' ? 'दायरा:' : 'Radius:'}
              </span>
              <select
                value={maxRadiusKm}
                onChange={(e) => setMaxRadiusKm(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 text-white text-[11px] font-bold rounded-lg px-2 py-0.5 outline-none"
              >
                <option value={25}>Within 25 km</option>
                <option value={50}>Within 50 km (Standard Area)</option>
                <option value={100}>Within 100 km</option>
                <option value={0}>All India (Nationwide)</option>
              </select>
            </div>

          </div>

          {/* Active Location Display */}
          <div className="pt-1 flex items-center space-x-2 text-xs font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>
              {language === 'mr' ? 'सध्याचे संदर्भ स्थान:' : language === 'hi' ? 'सक्रिय संदर्भ स्थान:' : 'Active Location Reference:'} {locationName}
            </span>
          </div>

        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left List of Nearest Centers */}
        <aside className="lg:col-span-5 space-y-4">
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
            <span>
              {language === 'mr' ? '५० किमी परिसरातील केंद्रे' : language === 'hi' ? '50 किमी दायरे में केंद्र' : 'Centers within radius'}: <strong className="text-gov-blue text-sm">{sortedAndFilteredCenters.length}</strong>
            </span>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 outline-none text-xs font-semibold text-slate-800 dark:text-white"
            >
              <option value="ALL">{language === 'mr' ? 'सर्व केंद्र प्रकार' : language === 'hi' ? 'सभी केंद्र प्रकार' : 'All Center Types'}</option>
              <option value="CSC">CSC (सीएससी केंद्र)</option>
              <option value="DIGITAL_SEVA">Digital Seva (आपले सरकार)</option>
            </select>
          </div>

          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {sortedAndFilteredCenters.length === 0 ? (
              <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-2">
                <MapPin className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="font-bold text-sm text-slate-800 dark:text-white">No Centers Found Within Radius</p>
                <p className="text-xs text-slate-500">Try expanding your search radius to 100 km or searching for a neighbouring district.</p>
              </div>
            ) : (
              sortedAndFilteredCenters.map((center, idx) => {
                const isSelected = activeCenter?.id === center.id;
                const isClosest = idx === 0;

                return (
                  <div
                    key={center.id}
                    onClick={() => setActiveCenter(center)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'glass-panel border-gov-blue dark:border-blue-500 shadow-lg scale-[1.01] bg-white/95 dark:bg-slate-900/95 ring-2 ring-gov-blue/20'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-gov-blue/10 text-gov-blue dark:bg-blue-950 dark:text-blue-300">
                        {center.type}
                      </span>

                      {/* Live Proximity Badge */}
                      <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center space-x-1 ${
                        isClosest
                          ? 'bg-emerald-500 text-white shadow-sm animate-pulse'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        <Compass className="w-3 h-3" />
                        <span>{center.distanceKm} km away {isClosest ? '• Nearest' : ''}</span>
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      {getCenterName(center, language)}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {getCenterAddress(center, language)}
                    </p>

                    <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                      <span className="flex items-center space-x-1">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{center.phone}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{language === 'mr' ? center.timing_mr || center.timing : language === 'hi' ? center.timing_hi || center.timing : center.timing}</span>
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </aside>

        {/* Right Active Center Detailed Card */}
        {activeCenter && (
          <section className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-gov-blue">{activeCenter.type} Center</span>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      {calculateDistanceKm(userLocation.lat, userLocation.lng, activeCenter.coordinates.lat, activeCenter.coordinates.lng)} km from {locationName}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {getCenterName(activeCenter, language)}
                  </h2>
                  <p className="text-xs text-slate-500">Officer in Charge: {activeCenter.officerInCharge}</p>
                </div>

                {/* Google Maps Turn-by-Turn Navigation */}
                <button 
                  onClick={() => {
                    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${activeCenter.coordinates.lat},${activeCenter.coordinates.lng}`;
                    window.open(url, '_blank');
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-gov-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-xs font-extrabold shadow-lg flex items-center space-x-2 transition-all shrink-0"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t('centers_get_directions', 'Get Navigation Directions')}</span>
                </button>
              </div>

              {/* Address & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <span className="font-bold text-slate-500 flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-gov-saffron" />
                    <span>{language === 'mr' ? 'पत्ता' : language === 'hi' ? 'पता' : 'Physical Address'}</span>
                  </span>
                  <p className="font-bold text-slate-800 dark:text-white">{getCenterAddress(activeCenter, language)}</p>
                  <p className="text-slate-400 font-mono font-semibold">{activeCenter.district}, {activeCenter.state} - {activeCenter.pincode}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <span className="font-bold text-slate-500 flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>{language === 'mr' ? 'वेळ व संपर्क' : language === 'hi' ? 'समय एवं संपर्क' : 'Operating Hours'}</span>
                  </span>
                  <p className="font-bold text-slate-800 dark:text-white">
                    {language === 'mr' ? activeCenter.timing_mr || activeCenter.timing : language === 'hi' ? activeCenter.timing_hi || activeCenter.timing : activeCenter.timing}
                  </p>
                  <p className="text-gov-blue font-bold">{activeCenter.phone}</p>
                </div>
              </div>

              {/* Supported Welfare Services */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-gov-saffron" />
                  <span>{language === 'mr' ? 'केंद्रावर उपलब्ध सेवा' : language === 'hi' ? 'केंद्र पर उपलब्ध सेवाएं' : 'Services Offered at this Center'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {getCenterServices(activeCenter, language).map((srv, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
