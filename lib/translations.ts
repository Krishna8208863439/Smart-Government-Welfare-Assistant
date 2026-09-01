export type LanguageCode = 'en' | 'hi' | 'mr';

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}

export const TRANSLATIONS: TranslationDictionary = {
  // Top Header
  govt_title: {
    en: 'GOVERNMENT OF INDIA',
    hi: 'भारत सरकार',
    mr: 'भारत सरकार'
  },
  digital_india: {
    en: 'DIGITAL INDIA INITIATIVE',
    hi: 'डिजिटल इंडिया पहल',
    mr: 'डिजिटल इंडिया उपक्रम'
  },
  helpline: {
    en: 'Helpline: 1800-11-2026 (Toll-Free)',
    hi: 'हेल्पलाइन: 1800-11-2026 (टोल-फ्री)',
    mr: 'हेल्पलाइन: 1800-11-2026 (टोल-फ्री)'
  },
  text_size: {
    en: 'Text:',
    hi: 'आकार:',
    mr: 'आकार:'
  },
  theme_toggle: {
    en: 'Toggle Theme',
    hi: 'थीम बदला',
    mr: 'थीम बदला'
  },

  // Navbar
  nav_home: {
    en: 'Home',
    hi: 'मुख्य पृष्ठ',
    mr: 'मुख्यपृष्ठ'
  },
  nav_schemes: {
    en: 'Find Schemes',
    hi: 'योजनाएं खोजें',
    mr: 'योजना शोधा'
  },
  nav_eligibility: {
    en: 'Eligibility Checker',
    hi: 'पात्रता जांचें',
    mr: 'पात्रता तपासा'
  },
  nav_ai_assistant: {
    en: 'AI Assistant',
    hi: 'एआई सहायक',
    mr: 'एआय सहाय्यक'
  },
  nav_track: {
    en: 'Track Status',
    hi: 'स्थिति ट्रैक करें',
    mr: 'स्थिती ट्रॅक करा'
  },
  nav_centers: {
    en: 'Assistance Centers',
    hi: 'सहायता केंद्र',
    mr: 'मदत केंद्र'
  },
  nav_tagline: {
    en: 'One Platform. Every Government Scheme.',
    hi: 'एक मंच। प्रत्येक सरकारी योजना।',
    mr: 'एकच व्यासपीठ. प्रत्येक सरकारी योजना.'
  },
  nav_login: {
    en: 'Sign In / Login',
    hi: 'लॉग इन करें',
    mr: 'लॉगिन करा'
  },
  nav_register: {
    en: 'Create Account',
    hi: 'खाता बनाएं',
    mr: 'खाते तयार करा'
  },
  nav_logout: {
    en: 'Log Out',
    hi: 'लॉग आउट',
    mr: 'लॉग आउट'
  },
  nav_dashboard: {
    en: 'My Dashboard',
    hi: 'डैशबोर्ड',
    mr: 'डॅशबोर्ड'
  },

  // Roles
  role_citizen: {
    en: 'Citizen',
    hi: 'नागरिक',
    mr: 'नागरिक'
  },
  role_officer: {
    en: 'Department Officer',
    hi: 'विभागीय अधिकारी',
    mr: 'विभागीय अधिकारी'
  },
  role_admin: {
    en: 'System Admin',
    hi: 'सिस्टम एडमिन',
    mr: 'सिस्टम प्रशासक'
  },

  // Schemes Directory & Filters
  schemes_title: {
    en: 'Discover Government Welfare Schemes',
    hi: 'सरकारी कल्याणकारी योजनाओं की खोज करें',
    mr: 'सरकारी कल्याणकारी योजना शोधा'
  },
  schemes_subtitle: {
    en: 'Browse verified welfare schemes across Central and State ministries. Filter by eligibility criteria, department, or financial benefit type.',
    hi: 'केंद्रीय और राज्य मंत्रालयों की सत्यापित कल्याणकारी योजनाएं देखें। पात्रता मानदंडों, विभाग या वित्तीय लाभ के आधार पर फ़िल्टर करें।',
    mr: 'केंद्र आणि राज्य मंत्रालयांच्या अधिकृत कल्याणकारी योजना पहा. पात्रता निकष, विभाग किंवा आर्थिक लाभाच्या आधारावर फिल्टर करा.'
  },
  schemes_badge: {
    en: 'Central & State Scheme Directory',
    hi: 'केंद्रीय और राज्य योजना निर्देशिका',
    mr: 'केंद्रीय आणि राज्य योजना सूची'
  },
  search_schemes_placeholder: {
    en: 'Search scheme name, department, PM-KISAN, Ayushman Bharat...',
    hi: 'योजना का नाम, विभाग, पीएम-किसान, आयुष्मान भारत खोजें...',
    mr: 'योजनेचे नाव, विभाग, पीएम-किसान, आयुष्मान भारत शोधा...'
  },
  filter_title: {
    en: 'Filters',
    hi: 'फ़िल्टर',
    mr: 'फिल्टर'
  },
  filter_reset: {
    en: 'Reset All',
    hi: 'रीसेट करें',
    mr: 'सर्व रीसेट करा'
  },
  filter_level: {
    en: 'Government Level',
    hi: 'सरकारी स्तर',
    mr: 'शासकीय स्तर'
  },
  filter_level_all: {
    en: 'All Government Levels',
    hi: 'सभी सरकारी स्तर',
    mr: 'सर्व शासकीय स्तर'
  },
  filter_level_central: {
    en: 'Central Government',
    hi: 'केंद्र सरकार',
    mr: 'केंद्र शासन'
  },
  filter_level_state: {
    en: 'State Government',
    hi: 'राज्य सरकार',
    mr: 'राज्य शासन'
  },
  filter_category: {
    en: 'Sector / Category',
    hi: 'क्षेत्र / श्रेणी',
    mr: 'क्षेत्र / वर्गवारी'
  },
  filter_category_all: {
    en: 'All Categories',
    hi: 'सभी श्रेणियां',
    mr: 'सर्व वर्गवारी'
  },
  filter_benefit_type: {
    en: 'Benefit Type',
    hi: 'लाभ का प्रकार',
    mr: 'लाभाचा प्रकार'
  },
  filter_benefit_all: {
    en: 'All Benefit Types',
    hi: 'सभी लाभ प्रकार',
    mr: 'सर्व लाभ प्रकार'
  },
  filter_benefit_financial: {
    en: 'Financial Assistance',
    hi: 'वित्तीय सहायता (DBT)',
    mr: 'आर्थिक सहाय्य (DBT)'
  },
  filter_benefit_insurance: {
    en: 'Insurance Cover',
    hi: 'बीमा कवर',
    mr: 'विमा संरक्षण'
  },
  filter_benefit_subsidy: {
    en: 'Subsidy',
    hi: 'सब्सिडी / अनुदान',
    mr: 'सबसिडी / अनुदान'
  },
  showing_schemes: {
    en: 'Showing active schemes',
    hi: 'सक्रिय योजनाएं प्रदर्शित',
    mr: 'सक्रिय योजना दर्शवित आहे'
  },
  verified_sources: {
    en: 'Verified Govt Sources',
    hi: 'सत्यापित सरकारी स्रोत',
    mr: 'प्रमाणित शासकीय स्रोत'
  },
  read_requirements: {
    en: 'Read Requirements',
    hi: 'विवरण व पात्रता पढ़ें',
    mr: 'पात्रता व तपशील वाचा'
  },
  apply_now: {
    en: 'Apply Now',
    hi: 'आवेदन करें',
    mr: 'अर्ज करा'
  },
  full_details: {
    en: 'Full Details',
    hi: 'पूर्ण विवरण',
    mr: 'पूर्ण तपशील'
  },
  max_benefit_label: {
    en: 'Max Benefit:',
    hi: 'अधिकतम लाभ:',
    mr: 'कमाल लाभ:'
  },
  department_label: {
    en: 'Department:',
    hi: 'विभाग:',
    mr: 'विभाग:'
  },
  required_docs_label: {
    en: 'Required Docs:',
    hi: 'आवश्यक दस्तावेज़:',
    mr: 'आवश्यक कागदपत्रे:'
  },
  no_schemes_found: {
    en: 'No Schemes Found',
    hi: 'कोई योजना नहीं मिली',
    mr: 'कोणतीही योजना आढळली नाही'
  },
  no_schemes_found_desc: {
    en: 'No schemes match your current filter parameters. Try clearing your search keyword or resetting filters.',
    hi: 'आपके वर्तमान फ़िल्टर मापदंडों से कोई योजना मेल नहीं खाती। फ़िल्टर रीसेट करने का प्रयास करें।',
    mr: 'तुमच्या फिल्टर निकषांशी कोणतीही योजना जुळत नाही. कृपया फिल्टर रीसेट करा.'
  },

  // Eligibility Checker
  elig_title: {
    en: 'Check Your Government Scheme Eligibility',
    hi: 'अपनी सरकारी योजना पात्रता की जांच करें',
    mr: 'तुमची सरकारी योजना पात्रता तपासा'
  },
  elig_subtitle: {
    en: 'Input your demographic details below. JanSahay AI evaluates your profile against official government eligibility guidelines in real-time.',
    hi: 'नीचे अपना विवरण दर्ज करें। जनसहाय एआई वास्तविक समय में आधिकारिक सरकारी दिशानिर्देशों के विरुद्ध आपकी प्रोफ़ाइल का मूल्यांकन करता है।',
    mr: 'खालील माहिती भरा. जनसहाय एआय अधिकृत सरकारी मार्गदर्शक तत्त्वांनुसार तुमच्या प्रोफाइलची रिअल-टाइम पडताळणी करते.'
  },
  elig_badge: {
    en: 'AI Precision Match Predictor',
    hi: 'एआई सटीक पात्रता विश्लेषक',
    mr: 'एआय अचूक पात्रता विश्लेषक'
  },
  elig_form_title: {
    en: 'Citizen Profile Questionnaire',
    hi: 'नागरिक प्रोफ़ाइल प्रश्नावली',
    mr: 'नागरिक प्रोफाइल प्रश्नावली'
  },
  elig_age_label: {
    en: 'Age (Years)',
    hi: 'आयु (वर्ष)',
    mr: 'वय (वर्षे)'
  },
  elig_gender_label: {
    en: 'Gender',
    hi: 'लिंग',
    mr: 'लिंग'
  },
  elig_gender_male: {
    en: 'Male',
    hi: 'पुरुष',
    mr: 'पुरुष'
  },
  elig_gender_female: {
    en: 'Female',
    hi: 'महिला',
    mr: 'महिला'
  },
  elig_gender_trans: {
    en: 'Transgender',
    hi: 'तृतीयपंथी',
    mr: 'तृतीयपंथी'
  },
  elig_income_label: {
    en: 'Annual Household Income (₹)',
    hi: 'वार्षिक पारिवारिक आय (₹)',
    mr: 'वार्षिक कौटुंबिक उत्पन्न (₹)'
  },
  elig_occupation_label: {
    en: 'Primary Occupation',
    hi: 'मुख्य व्यवसाय',
    mr: 'प्राथमिक व्यवसाय'
  },
  elig_category_label: {
    en: 'Social Category',
    hi: 'सामाजिक श्रेणी',
    mr: 'सामाजिक प्रवर्ग'
  },
  elig_state_label: {
    en: 'State Location',
    hi: 'राज्य',
    mr: 'राज्य'
  },
  elig_chk_farmer: {
    en: 'Landholding Farmer Status Verified',
    hi: 'जमीनधारक किसान स्थिति सत्यापित',
    mr: 'शेतजमीनधारक शेतकरी'
  },
  elig_chk_student: {
    en: 'Enrolled Student Status',
    hi: 'अध्ययनरत छात्र स्थिति',
    mr: 'शिकणारा विद्यार्थी'
  },
  elig_chk_pwd: {
    en: 'Person with Benchmark Disability (PwD)',
    hi: 'दिव्यांगजन स्थिति (PwD)',
    mr: 'दिव्यांग व्यक्ती (PwD)'
  },
  elig_results_heading: {
    en: 'Eligible Schemes',
    hi: 'पात्र योजनाएं',
    mr: 'पात्र योजना'
  },
  elig_results_desc: {
    en: 'Schemes sorted by AI Match Percentage and Direct Financial Benefit',
    hi: 'एआई मिलान प्रतिशत और प्रत्यक्ष लाभ के अनुसार क्रमबद्ध',
    mr: 'एआय मॅच टक्केवारी आणि थेट आर्थिक लाभांनुसार क्रमवारी'
  },
  elig_match_score_label: {
    en: 'AI Match Score',
    hi: 'एआई मिलान स्कोर',
    mr: 'एआय जुळणी स्कोअर'
  },
  elig_matched_criteria: {
    en: 'Matched Criteria',
    hi: 'संतुष्ट पात्रता मानदंड',
    mr: 'पात्र ठरलेले निकष'
  },
  elig_action_needed: {
    en: 'Action Needed',
    hi: 'आवश्यक कार्रवाई',
    mr: 'आवश्यक कृती'
  },
  elig_proceed_apply: {
    en: 'Proceed to Apply',
    hi: 'आवेदन के लिए आगे बढ़ें',
    mr: 'अर्ज करण्यासाठी पुढे जा'
  },

  // Track Application Status
  track_title: {
    en: 'Track Application Status in Real-Time',
    hi: 'वास्तविक समय में आवेदन की स्थिति ट्रैक करें',
    mr: 'रिअल-टाइममध्ये अर्जाची स्थिती ट्रॅक करा'
  },
  track_subtitle: {
    en: 'Enter your 12-digit Application Reference Number or registered Mobile/Aadhaar to inspect nodal verification stages.',
    hi: 'अपनी 12-अंकीय आवेदन संदर्भ संख्या या पंजीकृत मोबाइल दर्ज करें।',
    mr: 'तुमचा 12-अंकी अर्ज संदर्भ क्रमांक किंवा नोंदणीकृत मोबाईल प्रविष्ट करा.'
  },
  track_input_label: {
    en: 'Application Number / Aadhaar Number',
    hi: 'आवेदन संख्या / आधार नंबर',
    mr: 'अर्ज क्रमांक / आधार क्रमांक'
  },
  track_btn: {
    en: 'Track Status',
    hi: 'स्थिति ट्रैक करें',
    mr: 'स्थिती तपासा'
  },
  track_applicant_name: {
    en: 'Applicant Name',
    hi: 'आवेदक का नाम',
    mr: 'अर्जदाराचे नाव'
  },
  track_scheme_applied: {
    en: 'Applied Scheme',
    hi: 'लागू योजना',
    mr: 'अर्ज केलेली योजना'
  },
  track_status_current: {
    en: 'Current Lifecycle Stage',
    hi: 'वर्तमान स्थिति चरण',
    mr: 'सध्याचा स्थिती टप्पा'
  },

  // Assistance Centers
  centers_title: {
    en: 'Locate Nearest CSC & Welfare Assistance Centers',
    hi: 'निकटतम सीएससी और कल्याण सहायता केंद्र खोजें',
    mr: 'जवळचे सीएससी आणि मदत केंद्र शोधा'
  },
  centers_subtitle: {
    en: 'Find verified Common Service Centers (CSCs), Taluka Tehsil Desks, and Banking Kiosks for in-person application assistance.',
    hi: 'व्यक्तिगत आवेदन सहायता के लिए सत्यापित कॉमन सर्विस सेंटर (CSC) और तहसील कार्यालय खोजें।',
    mr: 'थेट अर्ज मदतीसाठी अधिकृत कॉमन सर्व्हिस सेंटर्स (CSC) आणि तहसील कार्यालये शोधा.'
  },
  centers_search_placeholder: {
    en: 'Search by District, Taluka, or Pincode (e.g. Pune, 411001, NOIDA)...',
    hi: 'जिला, तालुका या पिनकोड द्वारा खोजें (जैसे पुणे, 411001, नोएडा)...',
    mr: 'जिल्हा, तालुका किंवा पिनकोडने शोधा (उदा. पुणे, 411001, मुंबई)...'
  },
  centers_get_directions: {
    en: 'Get Navigation Directions',
    hi: 'दिशा-निर्देश प्राप्त करें',
    mr: 'मार्गदर्शन मिळवा'
  },

  // Citizen Dashboard
  dash_welcome: {
    en: 'Citizen Welfare Dashboard',
    hi: 'नागरिक कल्याण डैशबोर्ड',
    mr: 'नागरिक कल्याण डॅशबोर्ड'
  },
  dash_tab_apps: {
    en: 'My Applications',
    hi: 'मेरे आवेदन',
    mr: 'माझे अर्ज'
  },
  dash_tab_docs: {
    en: 'AI Document Vault',
    hi: 'दस्तावेज़ वॉल्ट',
    mr: 'कागदपत्रे वॉल्ट'
  },
  dash_tab_saved: {
    en: 'Saved Schemes',
    hi: 'सहेजी गई योजनाएं',
    mr: 'जतन केलेल्या योजना'
  },
  dash_tab_alerts: {
    en: 'Smart Alerts',
    hi: 'सूचनाएं',
    mr: 'महत्त्वाच्या सूचना'
  },

  // Hero Section
  hero_badge: {
    en: 'Project Viksit Bharat 2026 • AI-Powered Public Welfare Engine',
    hi: 'प्रोजेक्ट विकसित भारत 2026 • एआई-संचालित जन कल्याण मंच',
    mr: 'प्रकल्प विकसित भारत 2026 • एआय-आधारित लोककल्याण पोर्टल'
  },
  hero_title_1: {
    en: 'Find Every Government Scheme You\'re',
    hi: 'उन सभी सरकारी योजनाओं को खोजें जिनके लिए आप',
    mr: 'तुम्ही पात्र असलेल्या प्रत्येक सरकारी योजनेची'
  },
  hero_title_2: {
    en: 'Eligible For',
    hi: 'पात्र हैं',
    mr: 'माहिती मिळवा'
  },
  hero_desc: {
    en: 'Discover central, state, and local government schemes in minutes using AI. Eliminate confusion, paperwork, and middlemen with instant eligibility checking and automated application filling.',
    hi: 'एआई की मदद से कुछ ही मिनटों में केंद्र, राज्य और स्थानीय सरकारी योजनाओं की खोज करें। त्वरित पात्रता जांच और स्वचालित आवेदन द्वारा बिचौलियों से मुक्ति पाएं।',
    mr: 'एआयच्या मदतीने काही मिनिटांत केंद्र, राज्य आणि स्थानिक सरकारी योजना शोधा. त्वरित पात्रता तपासणी आणि स्वयंचलित अर्जासह दलालांपासून मुक्ती मिळवा.'
  },
  hero_btn_eligibility: {
    en: 'Check Eligibility Now',
    hi: 'पात्रता अभी जांचें',
    mr: 'आता पात्रता तपासा'
  },
  hero_btn_explore: {
    en: 'Explore Schemes',
    hi: 'योजनाएं देखें',
    mr: 'योजना एक्सप्लोर करा'
  },
  hero_btn_ai: {
    en: 'Talk to AI Assistant',
    hi: 'एआई सहायक से बात करें',
    mr: 'एआय सहाय्यकाशी बोला'
  },
  hero_badge_meity: {
    en: 'MeitY Standard Certified',
    hi: 'MeitY प्रमाणित',
    mr: 'MeitY प्रमाणित'
  },
  hero_badge_no_middlemen: {
    en: 'No Middlemen / Zero Fee',
    hi: 'बिचौलिया मुक्त / शून्य शुल्क',
    mr: 'दलाल मुक्त / शून्य शुल्क'
  },
  hero_badge_languages: {
    en: '3 Indian Languages (EN/HI/MR)',
    hi: '3 भारतीय भाषाएं (अंग्रेजी/हिंदी/मराठी)',
    mr: '3 भारतीय भाषा (इंग्रजी/हिंदी/मराठी)'
  },

  // Stats
  stat_schemes_label: {
    en: 'Active Schemes Registered',
    hi: 'सक्रिय पंजीकृत योजनाएं',
    mr: 'सक्रिय नोंदणीकृत योजना'
  },
  stat_disbursed_label: {
    en: 'Total Benefits Disbursed',
    hi: 'कुल वितरित लाभ',
    mr: 'एकूण वाटप केलेला निधी'
  },
  stat_apps_label: {
    en: 'Applications Processed',
    hi: 'संसाधित आवेदन',
    mr: 'प्रक्रिया केलेले अर्ज'
  },
  stat_match_label: {
    en: 'Success Match Rate',
    hi: 'सफलता मिलान दर',
    mr: 'यशस्वी जुळणी दर'
  },

  // Steps
  steps_heading_sub: {
    en: 'Simple 4-Step Process',
    hi: 'सरल 4-चरणीय प्रक्रिया',
    mr: 'सोपी 4-टप्प्यांची प्रक्रिया'
  },
  steps_heading: {
    en: 'How JanSahay AI Works',
    hi: 'जनसहाय एआई कैसे काम करता है',
    mr: 'जनसहाय एआय कसे कार्य करते'
  },
  step_1_title: {
    en: 'Enter Profile Info',
    hi: 'प्रोफ़ाइल विवरण दर्ज करें',
    mr: 'प्रोफाइल माहिती भरा'
  },
  step_1_desc: {
    en: 'Provide basic age, income, occupation, and state location details via our quick questionnaire.',
    hi: 'प्रश्नावली के माध्यम से अपनी आयु, आय, व्यवसाय और राज्य का बुनियादी विवरण दर्ज करें।',
    mr: 'आमच्या जलद प्रश्नावलीद्वारे वय, उत्पन्न, व्यवसाय आणि राज्याची प्राथमिक माहिती भरा.'
  },
  step_2_title: {
    en: 'AI Scans 1,000+ Schemes',
    hi: 'एआई 1,000+ योजनाओं की जांच करता है',
    mr: 'एआय 1,000+ योजनांची पडताळणी करते'
  },
  step_2_desc: {
    en: 'Our algorithm instantly checks official criteria and generates your percentage match score.',
    hi: 'हमारा एल्गोरिदम तुरंत आधिकारिक मानदंडों की जांच कर आपका मिलान स्कोर तैयार करता है।',
    mr: 'आमचे अल्गोरिदम त्वरित अधिकृत निकषांची पडताळणी करून मॅच स्कोअर तयार करते.'
  },
  step_3_title: {
    en: 'AI OCR Auto-Fill',
    hi: 'एआई ओसीआर ऑटो-फिल',
    mr: 'एआय ओसीआर ऑटो-फिल'
  },
  step_3_desc: {
    en: 'Upload Aadhaar/PAN cards. Our vision model extracts details and auto-fills application forms.',
    hi: 'आधार/पैन कार्ड अपलोड करें। हमारा विजन मॉडल विवरण निकालकर फॉर्म स्वचालित भरता है।',
    mr: 'आधार/पॅन कार्ड अपलोड करा. आमचे मॉडेल माहिती काढून अर्ज स्वयंचलितपणे भरते.'
  },
  step_4_title: {
    en: 'Real-Time Status Track',
    hi: 'रीयल-टाइम स्थिति ट्रैकिंग',
    mr: 'रिअल-टाइम स्थिती ट्रॅकिंग'
  },
  step_4_desc: {
    en: 'Receive direct SMS updates and track verification stages from officer review to DBT credit.',
    hi: 'सीधे एसएमएस अपडेट प्राप्त करें और अधिकारी समीक्षा से लेकर डीबीटी क्रेडिट तक ट्रैक करें।',
    mr: 'थेट एसएमएस अपडेट मिळवा आणि अधिकारी पुनरावलोकनापासून डीबीटी जमा होईपर्यंत ट्रॅक करा.'
  },

  // Auth: Login
  login_title: {
    en: 'Sign In to JanSahay AI',
    hi: 'जनसहाय एआई में लॉग इन करें',
    mr: 'जनसहाय एआय मध्ये लॉगिन करा'
  },
  login_subtitle: {
    en: 'Access citizen welfare services, track applications, or manage officer approvals.',
    hi: 'नागरिक कल्याण सेवाओं का उपयोग करें, आवेदन ट्रैक करें, या अधिकारी अनुमोदन प्रबंधित करें।',
    mr: 'नागरिक कल्याण सेवांचा वापर करा, अर्ज ट्रॅक करा किंवा अधिकारी मंजुरी व्यवस्थापित करा.'
  },
  login_email_label: {
    en: 'Email / Mobile Number / Aadhaar',
    hi: 'ईमेल / मोबाइल नंबर / आधार',
    mr: 'ईमेल / मोबाईल क्रमांक / आधार'
  },
  login_email_placeholder: {
    en: 'Enter your email, mobile, or Aadhaar number',
    hi: 'अपना ईमेल, मोबाइल या आधार नंबर दर्ज करें',
    mr: 'तुमचा ईमेल, मोबाईल किंवा आधार क्रमांक प्रविष्ट करा'
  },
  login_password_label: {
    en: 'Password',
    hi: 'पासवर्ड',
    mr: 'पासवर्ड'
  },
  login_password_placeholder: {
    en: 'Enter your secure password',
    hi: 'अपना सुरक्षित पासवर्ड दर्ज करें',
    mr: 'तुमचा सुरक्षित पासवर्ड प्रविष्ट करा'
  },
  login_remember_me: {
    en: 'Remember this device',
    hi: 'इस डिवाइस को याद रखें',
    mr: 'हे डिव्हाइस लक्षात ठेवा'
  },
  login_forgot_password: {
    en: 'Forgot Password?',
    hi: 'पासवर्ड भूल गए?',
    mr: 'पासवर्ड विसरलात?'
  },
  login_btn: {
    en: 'Sign In Securely',
    hi: 'सुरक्षित रूप से लॉग इन करें',
    mr: 'सुरक्षितपणे लॉगिन करा'
  },
  login_no_account: {
    en: 'Don\'t have an account?',
    hi: 'क्या आपका खाता नहीं है?',
    mr: 'खाते नाही आहे का?'
  },
  login_create_one: {
    en: 'Create a Free Account',
    hi: 'निःशुल्क खाता बनाएं',
    mr: 'मोफत खाते तयार करा'
  },
  login_demo_title: {
    en: 'Quick 1-Click Demo Login',
    hi: 'त्वरित 1-क्लिक डेमो लॉगिन',
    mr: 'झटपट 1-क्लिक डेमो लॉगिन'
  },
  login_demo_citizen: {
    en: 'Citizen Login',
    hi: 'नागरिक लॉगिन',
    mr: 'नागरिक लॉगिन'
  },
  login_demo_officer: {
    en: 'Officer Login',
    hi: 'अधिकारी लॉगिन',
    mr: 'अधिकारी लॉगिन'
  },
  login_demo_admin: {
    en: 'Admin Login',
    hi: 'एडमिन लॉगिन',
    mr: 'प्रशासक लॉगिन'
  },

  // Auth: Register
  reg_title: {
    en: 'Create Your JanSahay Account',
    hi: 'अपना जनसहाय खाता बनाएं',
    mr: 'तुमचे जनसहाय खाते तयार करा'
  },
  reg_subtitle: {
    en: 'Join millions of citizens discovering direct government benefits and subsidies.',
    hi: 'लाखों नागरिकों से जुड़ें और प्रत्यक्ष सरकारी लाभ और सब्सिडी प्राप्त करें।',
    mr: 'लाखो नागरिकांमध्ये सामील व्हा आणि थेट सरकारी लाभ व सबसिडी मिळवा.'
  },
  reg_role_select: {
    en: 'I am registering as:',
    hi: 'मैं इस रूप में पंजीकरण कर रहा हूँ:',
    mr: 'मी या नात्याने नोंदणी करत आहे:'
  },
  reg_fullname_label: {
    en: 'Full Legal Name',
    hi: 'पूरा कानूनी नाम',
    mr: 'पूर्ण कायदेशीर नाव'
  },
  reg_fullname_placeholder: {
    en: 'As per Aadhaar / Official ID',
    hi: 'आधार / आधिकारिक पहचान पत्र के अनुसार',
    mr: 'आधार / अधिकृत ओळखपत्रानुसार'
  },
  reg_email_label: {
    en: 'Email Address',
    hi: 'ईमेल पता',
    mr: 'ईमेल पत्ता'
  },
  reg_phone_label: {
    en: 'Mobile Number',
    hi: 'मोबाइल नंबर',
    mr: 'मोबाईल क्रमांक'
  },
  reg_aadhaar_label: {
    en: 'Aadhaar / ID Hash (Optional)',
    hi: 'आधार / पहचान पत्र संख्या (वैकल्पिक)',
    mr: 'आधार / ओळख क्रमांक (पर्यायी)'
  },
  reg_state_label: {
    en: 'State of Residence',
    hi: 'निवास का राज्य',
    mr: 'राहण्याचे राज्य'
  },
  reg_district_label: {
    en: 'District',
    hi: 'जिला',
    mr: 'जिल्हा'
  },
  reg_password_label: {
    en: 'Create Password',
    hi: 'पासवर्ड बनाएं',
    mr: 'पासवर्ड तयार करा'
  },
  reg_confirm_password_label: {
    en: 'Confirm Password',
    hi: 'पासवर्ड की पुष्टि करें',
    mr: 'पासवर्डची पुष्टी करा'
  },
  reg_terms_agree: {
    en: 'I agree to the National e-Governance Terms and MeitY Data Protection Guidelines.',
    hi: 'मैं राष्ट्रीय ई-गवर्नेंस शर्तों और डेटा सुरक्षा दिशानिर्देशों से सहमत हूँ।',
    mr: 'मी राष्ट्रीय ई-गव्हर्नन्स अटी आणि डेटा संरक्षण मार्गदर्शक तत्त्वांशी सहमत आहे.'
  },
  reg_btn_submit: {
    en: 'Create Account & Continue',
    hi: 'खाता बनाएं और जारी रखें',
    mr: 'खाते तयार करा आणि पुढे जा'
  },
  reg_already_have: {
    en: 'Already have an account?',
    hi: 'क्या आपके पास पहले से खाता है?',
    mr: 'आधीच खाते आहे का?'
  },
  reg_sign_in_link: {
    en: 'Sign In here',
    hi: 'यहाँ लॉग इन करें',
    mr: 'येथे लॉगिन करा'
  }
};
