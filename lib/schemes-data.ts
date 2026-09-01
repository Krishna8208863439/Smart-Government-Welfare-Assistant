export interface Scheme {
  id: string;
  code: string;
  title: string;
  hindiTitle?: string;
  marathiTitle?: string;
  shortDescription: string;
  hindiDesc?: string;
  marathiDesc?: string;
  description: string;
  category: string;
  department: string;
  hindiDept?: string;
  marathiDept?: string;
  ministry: string;
  level: 'Central' | 'State';
  state?: string;
  maxBenefit: string;
  hindiBenefit?: string;
  marathiBenefit?: string;
  benefitType: string;
  deadline?: string;
  active: boolean;
  liveBeneficiaries?: string;
  officialPortal?: string;
  requiredDocs: string[];
  hindiDocs?: string[];
  marathiDocs?: string[];
  applicationSteps: string[];
  eligibility: {
    minAge?: number;
    maxAge?: number;
    maxIncome?: number;
    gender?: string;
    categories?: string[];
    occupations?: string[];
    requiresFarmer?: boolean;
    requiresStudent?: boolean;
    requiresDisability?: boolean;
  };
  tags: string[];
  contactEmail: string;
  contactPhone: string;
}

export const SCHEME_CATEGORIES = [
  { 
    id: 'AGRICULTURE', 
    name: 'Agriculture & Farming', 
    name_hi: 'कृषि एवं किसान कल्याण', 
    name_mr: 'शेती व कृषी विकास',
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' 
  },
  { 
    id: 'EDUCATION', 
    name: 'Education & Schools', 
    name_hi: 'शिक्षा एवं विद्यालय', 
    name_mr: 'शिक्षण व शाळा',
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' 
  },
  { 
    id: 'SCHOLARSHIPS', 
    name: 'Scholarships & Stipends', 
    name_hi: 'छात्रवृत्ति एवं वजीफा', 
    name_mr: 'शिष्यवृत्ती व विद्यावेतन',
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20' 
  },
  { 
    id: 'HEALTHCARE', 
    name: 'Healthcare & Insurance', 
    name_hi: 'स्वास्थ्य एवं चिकित्सा बीमा', 
    name_mr: 'आरोग्य व वैद्यकीय विमा',
    color: 'bg-rose-500/10 text-rose-600 border-rose-500/20' 
  },
  { 
    id: 'HOUSING', 
    name: 'Housing & Urban', 
    name_hi: 'आवास एवं शहरी विकास', 
    name_mr: 'गृहनिर्माण व पक्के घर',
    color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' 
  },
  { 
    id: 'EMPLOYMENT', 
    name: 'Employment & Skill', 
    name_hi: 'रोजगार एवं कौशल विकास', 
    name_mr: 'रोजगार व कौशल्य विकास',
    color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' 
  },
  { 
    id: 'WOMEN_EMPOWERMENT', 
    name: 'Women Empowerment', 
    name_hi: 'महिला सशक्तिकरण', 
    name_mr: 'महिला सक्षमीकरण',
    color: 'bg-pink-500/10 text-pink-600 border-pink-500/20' 
  },
  { 
    id: 'SENIOR_CITIZENS', 
    name: 'Senior Citizens & Pension', 
    name_hi: 'वरिष्ठ नागरिक एवं पेंशन', 
    name_mr: 'ज्येष्ठ नागरिक व पेन्शन',
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20' 
  },
  { 
    id: 'STARTUP', 
    name: 'Startup & MSME Loans', 
    name_hi: 'स्टार्टअप एवं व्यवसाय ऋण', 
    name_mr: 'उद्योग व व्यवसाय कर्ज',
    color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20' 
  },
  { 
    id: 'CHILD_WELFARE', 
    name: 'Child Welfare & Nutrition', 
    name_hi: 'बाल कल्याण एवं पोषण', 
    name_mr: 'बाल कल्याण व पोषण',
    color: 'bg-orange-500/10 text-orange-600 border-orange-500/20' 
  }
];

export const SCHEMES_DATABASE: Scheme[] = [
  {
    id: 'pm-kisan',
    code: 'PM-KISAN-2026',
    title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    hindiTitle: 'प्रधानमंत्री किसान सम्मान निधि योजना',
    marathiTitle: 'प्रधानमंत्री किसान सन्मान निधी योजना',
    shortDescription: 'Direct financial assistance of ₹6,000 per year in three equal 4-monthly installments of ₹2,000 directly to farmer bank accounts.',
    hindiDesc: 'पात्र किसान परिवारों को हर साल ₹6,000 की प्रत्यक्ष वित्तीय सहायता तीन 4-मासिक किस्तों (प्रत्येक ₹2,000) में सीधे बैंक खाते में दी जाती है।',
    marathiDesc: 'शेतकरी कुटुंबांना दरवर्षी ₹6,000 थेट आर्थिक मदत प्रत्येकी ₹2,000 च्या तीन हप्त्यांमध्ये थेट बँक खात्यात जमा केली जाते.',
    description: 'PM-KISAN is a 100% centrally funded welfare scheme by Government of India. It provides financial support to landholding farmers across India.',
    category: 'AGRICULTURE',
    department: 'Department of Agriculture & Farmers Welfare',
    hindiDept: 'कृषि एवं किसान कल्याण विभाग',
    marathiDept: 'कृषी व शेतकरी कल्याण विभाग',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'Central',
    maxBenefit: '₹6,000 / year (Direct DBT Bank Credit)',
    hindiBenefit: '₹6,000 / वर्ष (प्रत्यक्ष बैंक अंतरण)',
    marathiBenefit: '₹6,000 / वर्ष (थेट बँक खात्यात जमा)',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '11.8 Crore Farmers',
    officialPortal: 'https://pmkisan.gov.in',
    requiredDocs: ['Aadhaar Card', 'Land Khatoni / 7/12 Extract', 'Bank Passbook with Aadhaar Linkage'],
    hindiDocs: ['आधार कार्ड', 'खतौनी / भूमि दस्तावेज', 'आधार लिंक बैंक पासबुक'],
    marathiDocs: ['आधार कार्ड', '७/१२ उतारा / जमीन नोंद', 'आधार लिंक केलेले बँक पासबुक'],
    applicationSteps: [
      'Enter Aadhaar Number and authenticate via OTP',
      'Upload Land Holding Records (7/12 extract or Khatoni)',
      'Provide Bank Account & IFSC details for Direct Benefit Transfer (DBT)',
      'District Agriculture Officer digitally verifies and triggers installment'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 75,
      requiresFarmer: true,
      maxIncome: 300000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Farmer', 'Agriculture', 'DBT', 'Cash Transfer', 'PM-KISAN'],
    contactEmail: 'pmkisan-ict@gov.in',
    contactPhone: '155261 / 1800-115-526'
  },
  {
    id: 'ayushman-bharat',
    code: 'AB-PMJAY-2026',
    title: 'Ayushman Bharat PM Jan Arogya Yojana (PM-JAY)',
    hindiTitle: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    marathiTitle: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    shortDescription: 'Cashless health insurance coverage up to ₹5,00,000 per family per year for secondary and tertiary hospitalisation across 27,000+ hospitals.',
    hindiDesc: 'प्रति वर्ष प्रति परिवार ₹5,00,000 तक का कैशलेस स्वास्थ्य बीमा, 27,000 से अधिक संबद्ध सरकारी और निजी अस्पतालों में उपलब्ध।',
    marathiDesc: 'सर्व सूचीबद्ध रुग्णालयांमध्ये दरवर्षी प्रति कुटुंब ₹5,00,000 पर्यंतचे मोफत आणि कॅशलेस आरोग्य संरक्षण व उपचार.',
    description: 'Ayushman Bharat PM-JAY is the world’s largest government-funded healthcare assurance scheme covering over 12 crore poor and vulnerable families.',
    category: 'HEALTHCARE',
    department: 'National Health Authority (NHA)',
    hindiDept: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)',
    marathiDept: 'राष्ट्रीय आरोग्य प्राधिकरण (NHA)',
    ministry: 'Ministry of Health and Family Welfare',
    level: 'Central',
    maxBenefit: '₹5,00,000 / year (Cashless Hospitalization)',
    hindiBenefit: '₹5,00,000 / वर्ष (मुफ़्त अस्पताल इलाज)',
    marathiBenefit: '₹5,00,000 / वर्ष (मोफत रुग्णालय उपचार)',
    benefitType: 'Insurance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '34.2 Crore Golden Cards Issued',
    officialPortal: 'https://pmjay.gov.in',
    requiredDocs: ['Aadhaar Card', 'Ration Card / Family ID', 'Mobile Number linked with Aadhaar'],
    hindiDocs: ['आधार कार्ड', 'राशन कार्ड / परिवार पहचान पत्र', 'मोबाइल नंबर'],
    marathiDocs: ['आधार कार्ड', 'रेशन कार्ड / कुटुंब ओळखपत्र', 'मोबाईल नंबर'],
    applicationSteps: [
      'Verify eligibility via SECC database, Ration Card or NFSA ID',
      'Perform Instant AI eKYC through Aadhaar OTP',
      'Download Official Ayushman Digital Golden Card instantly'
    ],
    eligibility: {
      maxIncome: 250000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Health', 'Insurance', 'Cashless Hospitalization', 'Golden Card', 'AB-PMJAY'],
    contactEmail: 'pmjay@nha.gov.in',
    contactPhone: '14555 / 1800-111-565'
  },
  {
    id: 'pm-surya-ghar',
    code: 'PMSG-2026',
    title: 'PM Surya Ghar: Muft Bijli Yojana',
    hindiTitle: 'पीएम सूर्य घर: मुफ्त बिजली योजना',
    marathiTitle: 'पीएम सूर्य घर: मोफत वीज योजना',
    shortDescription: 'Get up to 300 units of free electricity every month with central government subsidy up to ₹78,000 for rooftop solar installation.',
    hindiDesc: 'छत पर सोलर पैनल लगाने के लिए ₹78,000 तक की सीधी केंद्रीय सब्सिडी और हर महीने 300 यूनिट तक मुफ्त बिजली की सुविधा।',
    marathiDesc: 'घराच्या छतावर सोलर पॅनेल बसवण्यासाठी ₹78,000 पर्यंत थेट शासकीय सबसिडी आणि दरमहा 300 युनिट मोफत वीज.',
    description: 'PM Surya Ghar provides direct financial subsidies to households installing rooftop solar panels, slashing electricity bills.',
    category: 'HOUSING',
    department: 'Ministry of New and Renewable Energy',
    hindiDept: 'नवीन एवं नवीकरणीय ऊर्जा मंत्रालय',
    marathiDept: 'नवीन आणि नवीकरणीय ऊर्जा मंत्रालय',
    ministry: 'Ministry of New and Renewable Energy',
    level: 'Central',
    maxBenefit: '₹78,000 Direct Subsidy + 300 Free Units/Month',
    hindiBenefit: '₹78,000 सब्सिडी + 300 यूनिट मुफ़्त बिजली/माह',
    marathiBenefit: '₹78,000 थेट सबसिडी + 300 युनिट मोफत वीज/महिना',
    benefitType: 'Subsidy',
    deadline: '2026-12-31',
    active: true,
    liveBeneficiaries: '1.28 Crore Registrations',
    officialPortal: 'https://pmsuryaghar.gov.in',
    requiredDocs: ['Electricity Consumer Bill', 'Aadhaar Card', 'Bank Passbook', 'Roof Ownership Proof'],
    hindiDocs: ['बिजली बिल', 'आधार कार्ड', 'बैंक पासबुक', 'छत स्वामित्व प्रमाण'],
    marathiDocs: ['वीज बिल', 'आधार कार्ड', 'बँक पासबुक', 'जागेचा पुरावा'],
    applicationSteps: [
      'Register on National Portal with Electricity Consumer Number',
      'Submit Application with DISCOM and choose Empanelled Solar Vendor',
      'DISCOM Technical Feasibility Approval and Plant Installation',
      'Net Meter Installation and Direct Subsidy credit to Bank Account within 30 days'
    ],
    eligibility: {
      minAge: 18,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Solar', 'Electricity', 'Green Energy', 'Free Power', 'Subsidy'],
    contactEmail: 'pmsuryaghar@gov.in',
    contactPhone: '15555'
  },
  {
    id: 'pm-vishwakarma',
    code: 'PMVK-2026',
    title: 'PM Vishwakarma Kaushal Samman Yojana',
    hindiTitle: 'पीएम विश्वकर्मा कौशल सम्मान योजना',
    marathiTitle: 'पीएम विश्वकर्मा योजना',
    shortDescription: 'End-to-end support for traditional artisans: ₹15,000 e-voucher for modern toolkits and collateral-free credit up to ₹3,00,000 at 5% interest.',
    hindiDesc: 'पारंपरिक कारीगरों के लिए: ₹15,000 आधुनिक टूलकिट वाउचर, ₹500/दिन प्रशिक्षण वजीफा, और 5% रियायती ब्याज पर ₹3,00,000 तक बिना गारंटी ऋण।',
    marathiDesc: 'पारंपरिक कारागिरांसाठी: ₹15,000 आधुनिक टूलकिट ई-व्हाउचर, ₹500/दिवस विद्यावेतन आणि 5% सवलतीच्या दरात ₹3,00,000 विनातारण कर्ज.',
    description: 'Provides recognition via PM Vishwakarma Certificate & ID Card, skill upgradation, toolkit grants, and collateral-free enterprise credit.',
    category: 'EMPLOYMENT',
    department: 'Ministry of Micro, Small & Medium Enterprises',
    hindiDept: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय (MSME)',
    marathiDept: 'सूक्ष्म, लघु व मध्यम उद्योग मंत्रालय (MSME)',
    ministry: 'Ministry of MSME',
    level: 'Central',
    maxBenefit: '₹3,00,000 Loan @ 5% + ₹15,000 Toolkit Grant',
    hindiBenefit: '₹3,00,000 ऋण @ 5% + ₹15,000 टूलकिट अनुदान',
    marathiBenefit: '₹3,00,000 कर्ज @ 5% + ₹15,000 टूलकिट अनुदान',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '2.1 Crore Verified Artisans',
    officialPortal: 'https://pmvishwakarma.gov.in',
    requiredDocs: ['Aadhaar Card', 'Bank Passbook', 'Artisan Trade Skill Verification'],
    hindiDocs: ['आधार कार्ड', 'बैंक पासबुक', 'शिल्पकार/कारीगर ट्रेड सत्यापन'],
    marathiDocs: ['आधार कार्ड', 'बँक पासबुक', 'कारागीर व्यवसाय पडताळणी'],
    applicationSteps: [
      'Biometric e-KYC Verification at nearest CSC Kiosk or Online Portal',
      'Artisan Trade Registration',
      'Gram Panchayat / Urban Local Body 3-Stage Verification',
      '5-7 Days Basic Skill Training with ₹500/day stipend and toolkit voucher'
    ],
    eligibility: {
      minAge: 18,
      occupations: ['Artisan', 'Craftsman', 'Carpenter', 'Blacksmith', 'Tailor', 'Potter', 'Sculptor', 'Mason'],
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Artisans', 'Craftsmen', 'MSME', 'Toolkits', 'Low Interest Loan'],
    contactEmail: 'pmvishwakarma-msme@gov.in',
    contactPhone: '1800-267-7777 / 17923'
  },
  {
    id: 'ladki-bahin-maharashtra',
    code: 'MH-LBY-2026',
    title: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
    hindiTitle: 'मुख्यमंत्री माझी लाडकी बहीण योजना (महाराष्ट्र)',
    marathiTitle: 'मुख्यमंत्री माझी लाडकी बहीण योजना (महाराष्ट्र शासन)',
    shortDescription: 'Direct monthly financial assistance of ₹1,500 (₹18,000/year) directly transferred to the bank accounts of women aged 21-65 years in Maharashtra.',
    hindiDesc: 'महाराष्ट्र में 21 से 65 वर्ष की पात्र महिलाओं के बैंक खाते में ₹1,500 प्रति माह (₹18,000/वर्ष) का प्रत्यक्ष वित्तीय अंतरण।',
    marathiDesc: 'महाराष्ट्रातील 21 ते 65 वयोगटातील पात्र महिलांच्या बँक खात्यात दरमहा ₹1,500 (वार्षिक ₹18,000) थेट जमा.',
    description: 'Flagship welfare scheme by Government of Maharashtra aimed at economic independence and nutritional health of women.',
    category: 'WOMEN_EMPOWERMENT',
    department: 'Women and Child Development Department, Maharashtra',
    hindiDept: 'महिला एवं बाल विकास विभाग, महाराष्ट्र',
    marathiDept: 'महिला व बालविकास विभाग, महाराष्ट्र शासन',
    ministry: 'Government of Maharashtra',
    level: 'State',
    state: 'Maharashtra',
    maxBenefit: '₹1,500 / month (₹18,000 / year direct transfer)',
    hindiBenefit: '₹1,500 / माह (₹18,000 / वर्ष प्रत्यक्ष सहायता)',
    marathiBenefit: '₹1,500 / महिना (वार्षिक ₹18,000 थेट मदत)',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '2.4 Crore Women Beneficiaries',
    officialPortal: 'https://ladakibahin.maharashtra.gov.in',
    requiredDocs: ['Aadhaar Card', 'Maharashtra Domicile / Ration Card', 'Income Certificate (Under ₹2.5L)', 'Aadhaar-Linked Bank Passbook'],
    hindiDocs: ['आधार कार्ड', 'महाराष्ट्र निवास प्रमाण / राशन कार्ड', 'आय प्रमाण पत्र (₹2.5 लाख से कम)', 'बैंक पासबुक'],
    marathiDocs: ['आधार कार्ड', 'अधिवास प्रमाणपत्र (Domicile) / रेशन कार्ड', 'उत्पन्नाचा दाखला (₹2.5 लाखांपेक्षा कमी)', 'बँक पासबुक'],
    applicationSteps: [
      'Submit Online Application via Nari Shakti Doot Portal or CSC Kiosk',
      'Verify Maharashtra Domicile and Family Income',
      'Bank Account NPCI Aadhaar-Seeding Verification',
      'Direct monthly DBT disbursement of ₹1,500 on 15th of every month'
    ],
    eligibility: {
      minAge: 21,
      maxAge: 65,
      gender: 'FEMALE',
      maxIncome: 250000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Maharashtra', 'Women Welfare', 'Direct Benefit Transfer', 'Ladki Bahin'],
    contactEmail: 'wcd.mah@gov.in',
    contactPhone: '181 / 022-22025251'
  },
  {
    id: 'pm-awas-yojana',
    code: 'PMAY-2026',
    title: 'Pradhan Mantri Awas Yojana (PMAY - Urban & Gramin)',
    hindiTitle: 'प्रधानमंत्री आवास योजना',
    marathiTitle: 'प्रधानमंत्री आवास योजना (शहरी व ग्रामीण)',
    shortDescription: 'Direct financial subsidy up to ₹2,67,000 for construction or purchase of pucca houses for low-income and homeless families.',
    hindiDesc: 'कम आय वाले और बेघर परिवारों के पक्के मकान के निर्माण या खरीद के लिए ₹2,67,000 तक की प्रत्यक्ष वित्तीय सब्सिडी।',
    marathiDesc: 'कमी उत्पन्न असणाऱ्या व घर नसणाऱ्या कुटुंबांना पक्के घर बांधण्यासाठी किंवा खरेदीसाठी ₹2,67,000 पर्यंत थेट आर्थिक सबसिडी.',
    description: 'PMAY ensures housing for all eligible rural and urban beneficiaries with interest subvention and direct construction assistance.',
    category: 'HOUSING',
    department: 'Ministry of Housing and Urban Affairs',
    hindiDept: 'आवास और शहरी कार्य मंत्रालय',
    marathiDept: 'गृहनिर्माण आणि शहरी व्यवहार मंत्रालय',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'Central',
    maxBenefit: '₹2,67,000 Direct Home Subsidy',
    hindiBenefit: '₹2,67,000 गृह निर्माण सब्सिडी',
    marathiBenefit: '₹2,67,000 थेट घरकुल सबसिडी',
    benefitType: 'Subsidy',
    deadline: '2026-12-31',
    active: true,
    liveBeneficiaries: '3.12 Crore Houses Sanctioned',
    officialPortal: 'https://pmaymis.gov.in',
    requiredDocs: ['Aadhaar Card', 'Income Certificate', 'Affidavit of No Existing Pucca House', 'Bank Passbook'],
    hindiDocs: ['आधार कार्ड', 'आय प्रमाण पत्र', 'पक्के मकान न होने का शपथ पत्र', 'बैंक पासबुक'],
    marathiDocs: ['आधार कार्ड', 'उत्पन्नाचा दाखला', 'पक्के घर नसल्याचे प्रतिज्ञापत्र', 'बँक पासबुक'],
    applicationSteps: [
      'Fill Online PMAY Beneficiary Form with Socio-Economic Details',
      'AI verification of land/house ownership and family income',
      'Upload Bank details & Joint Aadhaar with Female Head of Family',
      'Geo-tagging and verification by Municipal/Panchayat Nodal Officer'
    ],
    eligibility: {
      minAge: 18,
      maxIncome: 300000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Housing', 'PMAY', 'Pucca House', 'Home Subsidy'],
    contactEmail: 'pmay-urban@gov.in',
    contactPhone: '011-23063285 / 1800-11-6163'
  },
  {
    id: 'pm-mudra-yojana',
    code: 'PMMY-2026',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY 2.0)',
    hindiTitle: 'प्रधानमंत्री मुद्रा योजना',
    marathiTitle: 'प्रधानमंत्री मुद्रा योजना',
    shortDescription: 'Collateral-free business loans up to ₹20,00,000 under Shishu (₹50k), Kishore (₹5L), Tarun (₹10L), and Tarun Plus (₹20L) for micro & small enterprises.',
    hindiDesc: 'सूक्ष्म एवं लघु उद्यमियों, दुकानदारों और छोटे व्यवसायों के लिए ₹20,00,000 तक का बिना किसी गारंटी के आसान व्यवसाय ऋण।',
    marathiDesc: 'लघु व मध्यम व्यावसायिक, दुकानदार आणि नवउद्योजकांसाठी ₹20,00,000 पर्यंतचे विनातारण व्यवसाय कर्ज.',
    description: 'PMMY facilitates micro-credit for non-corporate, non-farm small/micro enterprises across 4 flexible tiers.',
    category: 'STARTUP',
    department: 'Department of Financial Services',
    hindiDept: 'वित्तीय सेवाएं विभाग, वित्त मंत्रालय',
    marathiDept: 'वित्तीय सेवा विभाग, वित्त मंत्रालय',
    ministry: 'Ministry of Finance',
    level: 'Central',
    maxBenefit: 'Up to ₹20,00,000 Collateral-Free Business Credit',
    hindiBenefit: '₹20,00,000 तक बिना गारंटी व्यापार ऋण',
    marathiBenefit: '₹20,00,000 पर्यंत विनातारण व्यवसाय कर्ज',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '48.5 Crore Loans Sanctioned',
    officialPortal: 'https://mudra.org.in',
    requiredDocs: ['Aadhaar Card', 'PAN Card', 'Business Registration / Udyam Certificate', '6-Month Bank Statement'],
    hindiDocs: ['आधार कार्ड', 'पैन कार्ड', 'उद्यम पंजीकरण प्रमाण पत्र', '6 महीने का बैंक स्टेटमेंट'],
    marathiDocs: ['आधार कार्ड', 'पॅन कार्ड', 'उद्यम नोंदणी प्रमाणपत्र', '६ महिन्यांचे बँक स्टेटमेंट'],
    applicationSteps: [
      'Submit Online Application via Udyamimitra Portal or Bank Branch',
      'Select MUDRA category (Shishu, Kishore, Tarun, Tarun Plus)',
      'Bank reviews Business Cashflow and sanction loan without third-party collateral',
      'Issue MUDRA RuPay Debit Card for working capital drawdown'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 65,
      occupations: ['Self Employed', 'Vendor', 'Shopkeeper', 'Trader', 'Manufacturer', 'Service Provider'],
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Mudra', 'Business Loan', 'MSME', 'Collateral Free', 'Startup'],
    contactEmail: 'help@mudra.org.in',
    contactPhone: '1800-180-1111 / 1800-11-0001'
  },
  {
    id: 'sukanya-samriddhi',
    code: 'SSY-2026',
    title: 'Sukanya Samriddhi Yojana (SSY)',
    hindiTitle: 'सुकन्या समृद्धि योजना',
    marathiTitle: 'सुकन्या समृद्धी योजना',
    shortDescription: 'Highest tax-free interest rate of 8.2% p.a. for girl child education and marriage with complete Section 80C EEE tax exemption.',
    hindiDesc: 'बेटियों की उच्च शिक्षा एवं विवाह के लिए 8.2% की उच्चतम कर-मुक्त ब्याज दर और आयकर धारा 80C के तहत पूर्ण छूट।',
    marathiDesc: 'मुलींच्या उच्च शिक्षण व विवाहासाठी वार्षिक 8.2% सर्वोच्च करमुक्त व्याजदर आणि कलम 80C अंतर्गत पूर्ण कर सवलत.',
    description: 'Backed by Ministry of Finance, parents can open an account for girl children below 10 years of age with sovereign safety.',
    category: 'CHILD_WELFARE',
    department: 'Department of Posts / Banking Division',
    hindiDept: 'डाक विभाग / वित्तीय सेवा',
    marathiDept: 'टपाल विभाग (Post Office) / बँकिंग',
    ministry: 'Ministry of Finance',
    level: 'Central',
    maxBenefit: '8.2% Guaranteed Interest + Tax-Free Maturity Fund',
    hindiBenefit: '8.2% सरकारी ब्याज + कर-मुक्त मैच्योरिटी फंड',
    marathiBenefit: '8.2% हमी व्याज + करमुक्त मॅच्युरिटी फंड',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '3.6 Crore Accounts Active',
    officialPortal: 'https://indiapost.gov.in',
    requiredDocs: ['Girl Child Birth Certificate', 'Parents Aadhaar & PAN', 'Address Proof', 'Photos'],
    hindiDocs: ['बालिका का जन्म प्रमाण पत्र', 'माता-पिता का आधार व पैन कार्ड', 'निवास प्रमाण'],
    marathiDocs: ['मुलीचा जन्म दाखला', 'पालकांचे आधार व पॅन कार्ड', 'रहिवासी दाखला'],
    applicationSteps: [
      'Submit Form at nearest Post Office or Authorized Commercial Bank',
      'Provide Girl Child Birth Certificate & KYC documents',
      'Initial minimum deposit of ₹250 to activate account passbook',
      'Online digital deposit and balance check via India Post IPPB App'
    ],
    eligibility: {
      maxAge: 10,
      gender: 'FEMALE',
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Girl Child', 'High Interest', 'Tax Free', 'Post Office', 'Savings'],
    contactEmail: 'complaints@indiapost.gov.in',
    contactPhone: '1800-266-6868'
  },
  {
    id: 'pm-svanidhi',
    code: 'PMSVANIDHI-2026',
    title: 'PM Street Vendor\'s AtmaNirbhar Nidhi (PM SVANidhi)',
    hindiTitle: 'पीएम स्वनिधि योजना (स्ट्रीट वेंडर)',
    marathiTitle: 'पीएम स्वनिधी योजना (फेरीवाले व पथविक्रेते)',
    shortDescription: 'Collateral-free working capital loan up to ₹50,000 (1st Tranche ₹10k, 2nd ₹20k, 3rd ₹50k) with 7% interest subsidy & cashback incentives for street vendors.',
    hindiDesc: 'रेहड़ी-पटरी और फेरीवालों को ₹50,000 तक का बिना गारंटी कार्यशील पूंजी ऋण, 7% ब्याज सब्सिडी और डिजिटल कैशबैक के साथ।',
    marathiDesc: 'रस्त्यावरील विक्रेते व फेरीवाल्यांसाठी ₹50,000 पर्यंतचे विनातारण खेळते भांडवल कर्ज आणि 7% व्याज सवलत व कॅशबॅक.',
    description: 'PM SVANidhi empowers street vendors to restart their businesses and formalize their credit history.',
    category: 'EMPLOYMENT',
    department: 'Ministry of Housing and Urban Affairs',
    hindiDept: 'आवास और शहरी कार्य मंत्रालय',
    marathiDept: 'गृहनिर्माण आणि शहरी व्यवहार मंत्रालय',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'Central',
    maxBenefit: 'Up to ₹50,000 Working Capital Credit + 7% Subsidy',
    hindiBenefit: '₹50,000 तक ऋण + 7% ब्याज सब्सिडी',
    marathiBenefit: '₹50,000 पर्यंत कर्ज + 7% व्याज सबसिडी',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '65.8 Lakh Vendors Funded',
    officialPortal: 'https://pmsvanidhi.mohua.gov.in',
    requiredDocs: ['Aadhaar Card', 'Vending Certificate / Urban Local Body ID', 'Bank Passbook'],
    hindiDocs: ['आधार कार्ड', 'वेंडिंग पहचान पत्र / नगर पालिका प्रमाण', 'बैंक पासबुक'],
    marathiDocs: ['आधार कार्ड', 'फेरीवाला प्रमाणपत्र / पालिका ओळखपत्र', 'बँक पासबुक'],
    applicationSteps: [
      'Enter Aadhaar-linked Mobile Number for OTP Verification',
      'Verify Street Vending Certificate or Letter of Recommendation (LoR)',
      'Choose preferred Lending Institution (Public/Private Bank/MFI)',
      'Digital loan disbursement directly to Aadhaar seeded bank account'
    ],
    eligibility: {
      minAge: 18,
      occupations: ['Street Vendor', 'Vendor', 'Hawker', 'Self Employed'],
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Street Vendor', 'Working Capital', 'PM SVANidhi', 'Cashback', 'Micro Credit'],
    contactEmail: 'pmsvanidhi-mohua@gov.in',
    contactPhone: '1800-11-1979'
  },
  {
    id: 'atal-pension-yojana',
    code: 'APY-2026',
    title: 'Atal Pension Yojana (APY)',
    hindiTitle: 'अटल पेंशन योजना',
    marathiTitle: 'अटल पेन्शन योजना',
    shortDescription: 'Guaranteed government lifelong monthly pension of ₹1,000 to ₹5,000 starting from age 60 for unorganized sector workers.',
    hindiDesc: 'असंगठित क्षेत्र के श्रमिकों के लिए 60 वर्ष की आयु से ₹1,000 से ₹5,000 तक की आजीवन निश्चित सरकारी मासिक पेंशन।',
    marathiDesc: 'असंघटित क्षेत्रातील कामगारांसाठी वयाच्या 60 व्या वर्षापासून दरमहा ₹1,000 ते ₹5,000 ची हमी सरकारी पेन्शन.',
    description: 'APY is a guaranteed pension scheme administered by PFRDA under National Pension System for citizens aged 18 to 40.',
    category: 'SENIOR_CITIZENS',
    department: 'Pension Fund Regulatory and Development Authority (PFRDA)',
    hindiDept: 'पेंशन निधि विनियामक और विकास प्राधिकरण (PFRDA)',
    marathiDept: 'पेन्शन फंड नियामक आणि विकास प्राधिकरण (PFRDA)',
    ministry: 'Ministry of Finance',
    level: 'Central',
    maxBenefit: '₹5,000 / month Guaranteed Lifelong Pension',
    hindiBenefit: '₹5,000 / माह निश्चित आजीवन पेंशन',
    marathiBenefit: '₹5,000 / महिना हमी आजीवन पेन्शन',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '6.4 Crore Subscribed',
    officialPortal: 'https://npscra.nsdl.co.in',
    requiredDocs: ['Aadhaar Card', 'Savings Bank Account with Auto-Debit facility', 'Active Mobile Number'],
    hindiDocs: ['आधार कार्ड', 'बचत बैंक खाता', 'मोबाइल नंबर'],
    marathiDocs: ['आधार कार्ड', 'बचत बँक खाते (Auto-Debit)', 'मोबाईल क्रमांक'],
    applicationSteps: [
      'Link Savings Bank Account with APY National Portal',
      'Select desired pension slab (₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000)',
      'Authorize auto-debit contribution based on joining age',
      'PRAN Number generated instantly with digital subscriber card'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 40,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Pension', 'Senior Citizen', 'Retirement', 'APY', 'Monthly Income'],
    contactEmail: 'apy-grievances@pfrda.org.in',
    contactPhone: '1800-110-069'
  },
  {
    id: 'pm-ujjwala-yojana',
    code: 'PMUY-2026',
    title: 'Pradhan Mantri Ujjwala Yojana 2.0 (PMUY)',
    hindiTitle: 'प्रधानमंत्री उज्ज्वला योजना 2.0',
    marathiTitle: 'प्रधानमंत्री उज्ज्वला योजना २.०',
    shortDescription: 'Free LPG gas connection with first refill and stove free of cost, plus ₹300 direct subsidy per cylinder for BPL women.',
    hindiDesc: 'बीपीएल और कम आय वाली महिलाओं को मुफ्त एलपीजी गैस कनेक्शन, पहला रिफिल और गैस चूल्हा फ्री, तथा ₹300/सिलेंडर सीधी सब्सिडी।',
    marathiDesc: 'दारिद्र्यरेषेखालील महिलांना मोफत एलपीजी गॅस कनेक्शन, पहिला सिलेंडर व शेगडी मोफत आणि दरमहा ₹300 सबसिडी.',
    description: 'PMUY provides clean cooking fuel solutions to rural and deprived households to safeguard the health of women and children.',
    category: 'WOMEN_EMPOWERMENT',
    department: 'Ministry of Petroleum and Natural Gas',
    hindiDept: 'पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय',
    marathiDept: 'पेट्रोलियम आणि नैसर्गिक वायू मंत्रालय',
    ministry: 'Ministry of Petroleum and Natural Gas',
    level: 'Central',
    maxBenefit: 'Free LPG Gas Kit + ₹300 Subsidy / Cylinder',
    hindiBenefit: 'मुफ़्त गैस कनेक्शन + ₹300/सिलेंडर सब्सिडी',
    marathiBenefit: 'मोफत गॅस संच + ₹300/सिलेंडर सबसिडी',
    benefitType: 'Subsidy',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '10.35 Crore LPG Connections',
    officialPortal: 'https://pmuy.gov.in',
    requiredDocs: ['Aadhaar Card of Adult Woman', 'BPL Ration Card / 14-Point Declaration', 'Bank Passbook'],
    hindiDocs: ['महिला का आधार कार्ड', 'बीपीएल राशन कार्ड', 'बैंक पासबुक'],
    marathiDocs: ['महिला आधार कार्ड', 'दारिद्र्यरेषेखालील रेशन कार्ड', 'बँक पासबुक'],
    applicationSteps: [
      'Fill Online PMUY Form with nearest LPG Distributor (Indane, BharatGas, HP Gas)',
      'Upload Aadhaar and Ration Card for SECC verification',
      'Free LPG Cylinder, Regulator and Stove delivered to household',
      'Direct cylinder subsidy credited to Aadhaar-seeded bank account'
    ],
    eligibility: {
      minAge: 18,
      gender: 'FEMALE',
      maxIncome: 200000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['LPG', 'Clean Fuel', 'Women Welfare', 'Ujjwala', 'Gas Subsidy'],
    contactEmail: 'ujjwala@indianoil.in',
    contactPhone: '1906 / 1800-266-6696'
  },
  {
    id: 'national-scholarship-portal',
    code: 'NSP-2026',
    title: 'National Scholarship Portal (Post-Matric & MCM Scholarships)',
    hindiTitle: 'राष्ट्रीय छात्रवृत्ति पोर्टल (पोस्ट-मैट्रिक एवं योग्यता छात्रवृत्ति)',
    marathiTitle: 'राष्ट्रीय शिष्यवृत्ती पोर्टल (पोस्ट-मॅट्रिक व उच्च शिक्षण शिष्यवृत्ती)',
    shortDescription: 'Full tuition fee reimbursement up to ₹1,50,000 plus ₹1,200/month living stipend for SC/ST/OBC/Minority/EWS students pursuing higher education.',
    hindiDesc: 'उच्च शिक्षा प्राप्त कर रहे एससी/एसटी/ओबीसी/ईडब्ल्यूएस छात्रों के लिए ₹1,50,000 तक की पूरी ट्यूशन फीस प्रतिपूर्ति और ₹1,200/माह वजीफा।',
    marathiDesc: 'उच्च शिक्षण घेणाऱ्या मागासवर्गीय व आर्थिक दुर्बल विद्यार्थ्यांना ₹1,50,000 पर्यंत पूर्ण शिक्षण शुल्क प्रतिपूर्ती व दरमहा ₹1,200 विद्यावेतन.',
    description: 'NSP provides simplified, single-window electronic scholarship disbursements directly into students\' bank accounts.',
    category: 'SCHOLARSHIPS',
    department: 'Ministry of Electronics & IT (MeitY) / Ministry of Social Justice',
    hindiDept: 'इलेक्ट्रॉनिक्स और आईटी मंत्रालय / सामाजिक न्याय मंत्रालय',
    marathiDept: 'इलेक्ट्रॉनिक्स आणि माहिती तंत्रज्ञान मंत्रालय / सामाजिक न्याय',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'Central',
    maxBenefit: 'Up to ₹1,50,000 / year (Fee Waiver + Stipend)',
    hindiBenefit: '₹1,50,000 / वर्ष (शुल्क छूट + वजीफा)',
    marathiBenefit: '₹1,50,000 / वर्ष (फी माफी + विद्यावेतन)',
    benefitType: 'Financial Assistance',
    deadline: '2026-11-30',
    active: true,
    liveBeneficiaries: '1.42 Crore Students Funded',
    officialPortal: 'https://scholarships.gov.in',
    requiredDocs: ['Student Aadhaar Card', 'Mark Sheet of Previous Class (Min 50%)', 'Fee Receipt & Bonafide Certificate', 'Income Certificate'],
    hindiDocs: ['छात्र आधार कार्ड', 'अंकतालिका (न्यूनतम 50%)', 'कॉलेज बोनाफाइड व फीस रसीद', 'आय प्रमाण पत्र'],
    marathiDocs: ['विद्यार्थी आधार कार्ड', 'मागील वर्षाची गुणपत्रिका', 'कॉलेज बोनाफाइड व फी पावती', 'उत्पन्नाचा दाखला'],
    applicationSteps: [
      'Register with One-Time Registration (OTR) on NSP Portal',
      'Upload College Bonafide and Mark Sheets',
      'Institute Nodal Officer (INO) and State Nodal Officer (SNO) e-verification',
      'Direct scholarship credit to Student Aadhaar-linked Bank Account via PFMS'
    ],
    eligibility: {
      minAge: 15,
      maxAge: 30,
      requiresStudent: true,
      maxIncome: 250000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Scholarship', 'Education', 'College', 'Fee Waiver', 'NSP', 'Student'],
    contactEmail: 'helpdesk@nsp.gov.in',
    contactPhone: '0120-6619540'
  },
  {
    id: 'sanjay-gandhi-niradhar-maharashtra',
    code: 'MH-SGN-2026',
    title: 'Sanjay Gandhi Niradhar Anudan Yojana (Maharashtra)',
    hindiTitle: 'संजय गांधी निराधार अनुदान योजना (महाराष्ट्र)',
    marathiTitle: 'संजय गांधी निराधार अनुदान योजना (महाराष्ट्र शासन)',
    shortDescription: 'Monthly pension of ₹1,500 for destitute persons, blind, disabled, widows, and severely ill persons in Maharashtra with family income below ₹50,000/yr.',
    hindiDesc: 'महाराष्ट्र में निराधार व्यक्तियों, दिव्यांगजनों, विधवाओं और गंभीर रूप से बीमार व्यक्तियों को ₹1,500 प्रति माह की निश्चित पेंशन।',
    marathiDesc: 'महाराष्ट्रातील निराधार व्यक्ती, अंध, दिव्यांग, विधवा व अनाथ व्यक्तींना दरमहा ₹1,500 निश्चित आर्थिक पेन्शन मदत.',
    description: 'Provides social security pension support to destitute persons, persons with disabilities (40%+ disability), and orphans across Maharashtra.',
    category: 'SENIOR_CITIZENS',
    department: 'Social Justice and Special Assistance Department, Maharashtra',
    hindiDept: 'सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र',
    marathiDept: 'सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र शासन',
    ministry: 'Government of Maharashtra',
    level: 'State',
    state: 'Maharashtra',
    maxBenefit: '₹1,500 / month (₹18,000 / year direct pension)',
    hindiBenefit: '₹1,500 / माह प्रत्यक्ष पेंशन',
    marathiBenefit: '₹1,500 / महिना थेट पेन्शन',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing 2026',
    active: true,
    liveBeneficiaries: '38.4 Lakh Beneficiaries',
    officialPortal: 'https://sjsa.maharashtra.gov.in',
    requiredDocs: ['Aadhaar Card', 'Maharashtra Domicile Certificate', 'Disability / Medical Certificate (if applicable)', 'Income Certificate'],
    hindiDocs: ['आधार कार्ड', 'अधिवास प्रमाण पत्र', 'दिव्यांगता / चिकित्सा प्रमाण पत्र', 'आय प्रमाण पत्र'],
    marathiDocs: ['आधार कार्ड', 'रहिवासी दाखला (१५ वर्षे)', 'दिव्यांगत्व / वैद्यकीय प्रमाणपत्र', 'उत्पन्नाचा दाखला'],
    applicationSteps: [
      'Submit Application Form at Taluka Tehsildar Office or Aaple Sarkar Seva Kendra',
      'Local Taluka Committee reviews Destitute & Disability status',
      'Sanction order issued by Tehsildar',
      'Monthly direct bank credit on 1st of every month'
    ],
    eligibility: {
      minAge: 18,
      maxIncome: 50000,
      requiresDisability: true,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Maharashtra', 'Pension', 'Disability', 'Widow Support', 'Destitute'],
    contactEmail: 'sjsa.mah@gov.in',
    contactPhone: '1800-225-544'
  }
];

export interface AssistanceCenter {
  id: string;
  name: string;
  name_hi?: string;
  name_mr?: string;
  type: string;
  district: string;
  district_hi?: string;
  district_mr?: string;
  state: string;
  address: string;
  address_hi?: string;
  address_mr?: string;
  pincode: string;
  phone: string;
  timing: string;
  timing_hi?: string;
  timing_mr?: string;
  officerInCharge: string;
  services: string[];
  services_hi?: string[];
  services_mr?: string[];
  coordinates: { lat: number; lng: number };
}

export interface CityLocation {
  name: string;
  name_hi: string;
  name_mr: string;
  state: string;
  lat: number;
  lng: number;
}

export const ALL_INDIA_CITIES: CityLocation[] = [
  // Maharashtra
  { name: 'Pune', name_hi: 'पुणे', name_mr: 'पुणे', state: 'Maharashtra', lat: 18.5204, lng: 73.8567 },
  { name: 'Mumbai', name_hi: 'मुंबई', name_mr: 'मुंबई', state: 'Maharashtra', lat: 19.0760, lng: 72.8777 },
  { name: 'Nagpur', name_hi: 'नागपुर', name_mr: 'नागपूर', state: 'Maharashtra', lat: 21.1458, lng: 79.0882 },
  { name: 'Nashik', name_hi: 'नासिक', name_mr: 'नाशिक', state: 'Maharashtra', lat: 19.9975, lng: 73.7898 },
  { name: 'Chhatrapati Sambhajinagar (Aurangabad)', name_hi: 'छत्रपति संभाजीनगर', name_mr: 'छत्रपती संभाजीनगर', state: 'Maharashtra', lat: 19.8762, lng: 75.3433 },
  { name: 'Thane', name_hi: 'ठाणे', name_mr: 'ठाणे', state: 'Maharashtra', lat: 19.2183, lng: 72.9781 },
  { name: 'Navi Mumbai', name_hi: 'नवी मुंबई', name_mr: 'नवी मुंबई', state: 'Maharashtra', lat: 19.0330, lng: 73.0297 },
  { name: 'Solapur', name_hi: 'सोलापुर', name_mr: 'सोलापूर', state: 'Maharashtra', lat: 17.6599, lng: 75.9064 },
  { name: 'Kolhapur', name_hi: 'कोल्हापुर', name_mr: 'कोल्हापूर', state: 'Maharashtra', lat: 16.7050, lng: 74.2433 },
  { name: 'Amravati', name_hi: 'अमरावती', name_mr: 'अमरावती', state: 'Maharashtra', lat: 20.9374, lng: 77.7796 },
  { name: 'Nanded', name_hi: 'नांदेड़', name_mr: 'नांदेड', state: 'Maharashtra', lat: 19.1383, lng: 77.3210 },
  { name: 'Jalgaon', name_hi: 'जलगांव', name_mr: 'जळगाव', state: 'Maharashtra', lat: 21.0077, lng: 75.5626 },
  { name: 'Akola', name_hi: 'अकोला', name_mr: 'अकोला', state: 'Maharashtra', lat: 20.7002, lng: 77.0082 },
  { name: 'Latur', name_hi: 'लातूर', name_mr: 'लातूर', state: 'Maharashtra', lat: 18.4088, lng: 76.5604 },
  { name: 'Dhule', name_hi: 'धुले', name_mr: 'धुळे', state: 'Maharashtra', lat: 20.9042, lng: 74.7749 },
  { name: 'Ahmednagar', name_hi: 'अहमदनगर', name_mr: 'अहमदनगर', state: 'Maharashtra', lat: 19.0952, lng: 74.7496 },
  { name: 'Chandrapur', name_hi: 'चंद्रपुर', name_mr: 'चंद्रपूर', state: 'Maharashtra', lat: 19.9615, lng: 79.2961 },
  { name: 'Satara', name_hi: 'सातारा', name_mr: 'सातारा', state: 'Maharashtra', lat: 17.6805, lng: 73.9935 },
  { name: 'Sangli', name_hi: 'सांगली', name_mr: 'सांगली', state: 'Maharashtra', lat: 16.8524, lng: 74.5815 },
  { name: 'Ratnagiri', name_hi: 'रत्नागिरी', name_mr: 'रत्नागिरी', state: 'Maharashtra', lat: 16.9902, lng: 73.3120 },

  // Delhi NCR
  { name: 'New Delhi', name_hi: 'नई दिल्ली', name_mr: 'नवी दिल्ली', state: 'Delhi', lat: 28.6139, lng: 77.2090 },
  { name: 'NOIDA', name_hi: 'नोएडा', name_mr: 'नोएडा', state: 'Uttar Pradesh', lat: 28.5355, lng: 77.3910 },
  { name: 'Greater Noida', name_hi: 'ग्रेटर नोएडा', name_mr: 'ग्रेटर नोएडा', state: 'Uttar Pradesh', lat: 28.4744, lng: 77.5040 },
  { name: 'Ghaziabad', name_hi: 'गाजियाबाद', name_mr: 'गाझियाबाद', state: 'Uttar Pradesh', lat: 28.6692, lng: 77.4538 },
  { name: 'Gurugram', name_hi: 'गुरुग्राम', name_mr: 'गुरुग्राम', state: 'Haryana', lat: 28.4595, lng: 77.0266 },
  { name: 'Faridabad', name_hi: 'फरीदाबाद', name_mr: 'फरीदाबाद', state: 'Haryana', lat: 28.4089, lng: 77.3178 },

  // Uttar Pradesh
  { name: 'Lucknow', name_hi: 'लखनऊ', name_mr: 'लखनौ', state: 'Uttar Pradesh', lat: 26.8467, lng: 80.9462 },
  { name: 'Kanpur', name_hi: 'कानपुर', name_mr: 'कानपूर', state: 'Uttar Pradesh', lat: 26.4499, lng: 80.3319 },
  { name: 'Varanasi', name_hi: 'वाराणसी (काशी)', name_mr: 'वाराणसी (काशी)', state: 'Uttar Pradesh', lat: 25.3176, lng: 82.9739 },
  { name: 'Prayagraj (Allahabad)', name_hi: 'प्रयागराज', name_mr: 'प्रयागराज', state: 'Uttar Pradesh', lat: 25.4358, lng: 81.8463 },
  { name: 'Agra', name_hi: 'आगरा', name_mr: 'आग्रा', state: 'Uttar Pradesh', lat: 27.1767, lng: 78.0081 },
  { name: 'Meerut', name_hi: 'मेरठ', name_mr: 'मेरठ', state: 'Uttar Pradesh', lat: 28.9845, lng: 77.7064 },
  { name: 'Gorakhpur', name_hi: 'गोरखपुर', name_mr: 'गोरखपूर', state: 'Uttar Pradesh', lat: 26.7606, lng: 83.3732 },
  { name: 'Bareilly', name_hi: 'बरेली', name_mr: 'बरेली', state: 'Uttar Pradesh', lat: 28.3670, lng: 79.4304 },
  { name: 'Ayodhya', name_hi: 'अयोध्या', name_mr: 'अयोध्या', state: 'Uttar Pradesh', lat: 26.7922, lng: 82.1998 },

  // Karnataka
  { name: 'Bengaluru (Bangalore)', name_hi: 'बेंगलुरु', name_mr: 'बंगळुरू', state: 'Karnataka', lat: 12.9716, lng: 77.5946 },
  { name: 'Mysuru (Mysore)', name_hi: 'मैसूरु', name_mr: 'म्हैसूर', state: 'Karnataka', lat: 12.2958, lng: 76.6394 },
  { name: 'Hubballi-Dharwad', name_hi: 'हुबली-धारवाड़', name_mr: 'हुबळी-धारवाड', state: 'Karnataka', lat: 15.3647, lng: 75.1240 },
  { name: 'Mangaluru', name_hi: 'मंगलुरु', name_mr: 'मंगळुरू', state: 'Karnataka', lat: 12.9141, lng: 74.8560 },
  { name: 'Belagavi (Belgaum)', name_hi: 'बेलगावी', name_mr: 'बेळगाव', state: 'Karnataka', lat: 15.8497, lng: 74.4977 },

  // Gujarat
  { name: 'Ahmedabad', name_hi: 'अहमदाबाद', name_mr: 'अहमदाबाद', state: 'Gujarat', lat: 23.0225, lng: 72.5714 },
  { name: 'Surat', name_hi: 'सूरत', name_mr: 'सुरत', state: 'Gujarat', lat: 21.1702, lng: 72.8311 },
  { name: 'Vadodara (Baroda)', name_hi: 'वडोदरा', name_mr: 'वडोदरा', state: 'Gujarat', lat: 22.3072, lng: 73.1812 },
  { name: 'Rajkot', name_hi: 'राजकोट', name_mr: 'राजकोट', state: 'Gujarat', lat: 22.3039, lng: 70.8022 },
  { name: 'Gandhinagar', name_hi: 'गांधीनगर', name_mr: 'गांधीनगर', state: 'Gujarat', lat: 23.2156, lng: 72.6369 },

  // Tamil Nadu
  { name: 'Chennai', name_hi: 'चेन्नई', name_mr: 'चेन्नई', state: 'Tamil Nadu', lat: 13.0827, lng: 80.2707 },
  { name: 'Coimbatore', name_hi: 'कोयंबटूर', name_mr: 'कोइम्बतूर', state: 'Tamil Nadu', lat: 11.0168, lng: 76.9558 },
  { name: 'Madurai', name_hi: 'मदुरै', name_mr: 'मदुराई', state: 'Tamil Nadu', lat: 9.9252, lng: 78.1198 },
  { name: 'Tiruchirappalli (Trichy)', name_hi: 'तिरुचिरापल्ली', name_mr: 'तिरुचिरापल्ली', state: 'Tamil Nadu', lat: 10.7905, lng: 78.7047 },

  // West Bengal
  { name: 'Kolkata', name_hi: 'कोलकाता', name_mr: 'कोलकाता', state: 'West Bengal', lat: 22.5726, lng: 88.3639 },
  { name: 'Howrah', name_hi: 'हावड़ा', name_mr: 'हावडा', state: 'West Bengal', lat: 22.5958, lng: 88.2636 },
  { name: 'Siliguri', name_hi: 'सिलीगुड़ी', name_mr: 'सिलिगुडी', state: 'West Bengal', lat: 26.7271, lng: 88.3953 },

  // Rajasthan
  { name: 'Jaipur', name_hi: 'जयपुर', name_mr: 'जयपूर', state: 'Rajasthan', lat: 26.9124, lng: 75.7873 },
  { name: 'Jodhpur', name_hi: 'जोधपुर', name_mr: 'जोधपूर', state: 'Rajasthan', lat: 26.2389, lng: 73.0243 },
  { name: 'Udaipur', name_hi: 'उदयपुर', name_mr: 'उदयपूर', state: 'Rajasthan', lat: 24.5854, lng: 73.7125 },
  { name: 'Kota', name_hi: 'कोटा', name_mr: 'कोटा', state: 'Rajasthan', lat: 25.2138, lng: 75.8648 },

  // Telangana & AP
  { name: 'Hyderabad', name_hi: 'हैदराबाद', name_mr: 'हैद्राबाद', state: 'Telangana', lat: 17.3850, lng: 78.4867 },
  { name: 'Visakhapatnam (Vizag)', name_hi: 'विशाखापत्तनम', name_mr: 'विशाखापट्टणम', state: 'Andhra Pradesh', lat: 17.6868, lng: 83.2185 },
  { name: 'Vijayawada', name_hi: 'विजयवाड़ा', name_mr: 'विजयवाडा', state: 'Andhra Pradesh', lat: 16.5062, lng: 80.6480 },

  // Madhya Pradesh
  { name: 'Indore', name_hi: 'इंदौर', name_mr: 'इंदूर', state: 'Madhya Pradesh', lat: 22.7196, lng: 75.8577 },
  { name: 'Bhopal', name_hi: 'भोपाल', name_mr: 'भोपाळ', state: 'Madhya Pradesh', lat: 23.2599, lng: 77.4126 },
  { name: 'Gwalior', name_hi: 'ग्वालियर', name_mr: 'ग्वाल्हेर', state: 'Madhya Pradesh', lat: 26.2183, lng: 78.1828 },

  // Bihar
  { name: 'Patna', name_hi: 'पटना', name_mr: 'पाटणा', state: 'Bihar', lat: 25.5941, lng: 85.1376 },
  { name: 'Gaya', name_hi: 'गया', name_mr: 'गया', state: 'Bihar', lat: 24.7955, lng: 85.0002 },

  // Kerala
  { name: 'Thiruvananthapuram (Trivandrum)', name_hi: 'तिरुवनंतपुरम', name_mr: 'तिरुवनंतपुरम', state: 'Kerala', lat: 8.5241, lng: 76.9366 },
  { name: 'Kochi (Cochin)', name_hi: 'कोच्चि', name_mr: 'कोची', state: 'Kerala', lat: 9.9312, lng: 76.2673 },

  // Punjab, Haryana & Chandigarh
  { name: 'Chandigarh', name_hi: 'चंडीगढ़', name_mr: 'चंदिगढ', state: 'Chandigarh', lat: 30.7333, lng: 76.7794 },
  { name: 'Ludhiana', name_hi: 'लुधियाना', name_mr: 'लुधियाना', state: 'Punjab', lat: 30.9010, lng: 75.8573 },
  { name: 'Amritsar', name_hi: 'अमृतसर', name_mr: 'अमृतसर', state: 'Punjab', lat: 31.6340, lng: 74.8723 },

  // Odisha, Assam, Jharkhand, Goa
  { name: 'Bhubaneswar', name_hi: 'भुवनेश्वर', name_mr: 'भुवनेश्वर', state: 'Odisha', lat: 20.2961, lng: 85.8245 },
  { name: 'Guwahati', name_hi: 'गुवाहाटी', name_mr: 'गुवाहाटी', state: 'Assam', lat: 26.1445, lng: 91.7362 },
  { name: 'Ranchi', name_hi: 'रांची', name_mr: 'रांची', state: 'Jharkhand', lat: 23.3441, lng: 85.3096 },
  { name: 'Raipur', name_hi: 'रायपुर', name_mr: 'रायपूर', state: 'Chhattisgarh', lat: 21.2514, lng: 81.6296 },
  { name: 'Dehradun', name_hi: 'देहरादून', name_mr: 'डेहराडून', state: 'Uttarakhand', lat: 30.3165, lng: 78.0322 },
  { name: 'Panaji (Goa)', name_hi: 'पणजी (गोवा)', name_mr: 'पणजी (गोवा)', state: 'Goa', lat: 15.4909, lng: 73.8278 }
];

export const ASSISTANCE_CENTERS: AssistanceCenter[] = [
  // Pune Centers
  {
    id: 'csc-pune-01',
    name: 'Maha-e-Seva Kendra (Shivajinagar CSC)',
    name_hi: 'महा-ई-सेवा केंद्र (शिवाजीनगर सीएससी)',
    name_mr: 'महा-ई-सेवा केंद्र (शिवाजीनगर सीएससी केंद्र)',
    type: 'CSC',
    district: 'Pune',
    district_hi: 'पुणे',
    district_mr: 'पुणे',
    state: 'Maharashtra',
    address: 'Near Old Zilla Parishad Office, Shivajinagar, Pune',
    address_hi: 'पुराना जिला परिषद कार्यालय, शिवाजीनगर, पुणे',
    address_mr: 'जुने जिल्हा परिषद कार्यालय जवळ, शिवाजीनगर, पुणे',
    pincode: '411005',
    phone: '+91 20 2553 4412',
    timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
    officerInCharge: 'Sanjay Shinde (Village Level Entrepreneur)',
    services: ['Ladki Bahin Registration', 'PM-KISAN e-KYC', 'Ayushman Golden Card', 'Aadhaar Biometric Update'],
    services_hi: ['लाडकी बहीण पंजीकरण', 'पीएम-किसान ई-केवाईसी', 'आयुष्मान गोल्डन कार्ड', 'आधार बायोमेट्रिक'],
    services_mr: ['लाडकी बहीण नोंदणी', 'पीएम-किसान ई-केवायसी', 'आयुष्मान गोल्डन कार्ड', 'आधार बायोमेट्रिक अपडेट'],
    coordinates: { lat: 18.5308, lng: 73.8474 }
  },
  {
    id: 'csc-pune-02',
    name: 'Aaple Sarkar Seva Kendra (Kothrud)',
    name_hi: 'आपले सरकार सेवा केंद्र (कोथरूड)',
    name_mr: 'आपले सरकार सेवा केंद्र (कोथरूड, पुणे)',
    type: 'DIGITAL_SEVA',
    district: 'Pune',
    district_hi: 'पुणे',
    district_mr: 'पुणे',
    state: 'Maharashtra',
    address: 'Shop 12, Rahul Complex, Near Karve Statue, Kothrud, Pune',
    address_hi: 'दुकान 12, राहुल कॉम्प्लेक्स, कर्वे पुतला के पास, कोथरूड, पुणे',
    address_mr: 'दुकान १२, राहुल कॉम्प्लेक्स, कर्वे पुतळ्याजवळ, कोथरूड, पुणे',
    pincode: '411038',
    phone: '+91 20 2544 8920',
    timing: 'Mon-Sat: 09:30 AM - 06:30 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:30 - शाम 06:30',
    timing_mr: 'सोम-शनि: सकाळी ०९:३० - संध्याकाळी ०६:३०',
    officerInCharge: 'Mahesh Kulkarni (VLE Manager)',
    services: ['Income & Caste Certificates', 'Domicile Certificate', 'PMAY Housing Form', 'PM Surya Ghar Registration'],
    services_hi: ['आय व जाति प्रमाण पत्र', 'अधिवास प्रमाण पत्र', 'पीएम आवास फॉर्म', 'पीएम सूर्य घर'],
    services_mr: ['उत्पन्न व जात दाखला', 'रहिवासी दाखला', 'पीएम आवास अर्ज', 'पीएम सूर्य घर नोंदणी'],
    coordinates: { lat: 18.5074, lng: 73.8077 }
  },
  {
    id: 'csc-pune-03',
    name: 'Digital Seva Kendra (Hinjawadi IT Park)',
    name_hi: 'डिजिटल सेवा केंद्र (हिंजवडी आईटी पार्क)',
    name_mr: 'डिजिटल सेवा केंद्र (हिंजवडी आयटी पार्क)',
    type: 'CSC',
    district: 'Pune',
    district_hi: 'पुणे',
    district_mr: 'पुणे',
    state: 'Maharashtra',
    address: 'Phase 1, Near Shivaji Chowk, Hinjawadi, Pune',
    address_hi: 'फेज 1, शिवाजी चौक के पास, हिंजवडी, पुणे',
    address_mr: 'फेज १, शिवाजी चौकाजवळ, हिंजवडी, पुणे',
    pincode: '411057',
    phone: '+91 20 6689 3321',
    timing: 'Mon-Sat: 09:00 AM - 07:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 07:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०७:००',
    officerInCharge: 'Sunita Patil (Center Coordinator)',
    services: ['MUDRA MSME Loan Desk', 'Digital Life Certificate', 'Aadhaar Address Update', 'PM Vishwakarma'],
    services_hi: ['मुद्रा ऋण सहायता', 'डिजिटल जीवन प्रमाण पत्र', 'आधार पता अपडेट', 'पीएम विश्वकर्मा'],
    services_mr: ['मुद्रा कर्ज मदत', 'डिजिटल जीवन प्रमाणपत्र', 'आधार पत्ता अपडेट', 'पीएम विश्वकर्मा नोंदणी'],
    coordinates: { lat: 18.5913, lng: 73.7389 }
  },

  // Mumbai Centers
  {
    id: 'csc-mumbai-01',
    name: 'Aaple Sarkar Seva Kendra (Dadar West)',
    name_hi: 'आपले सरकार सेवा केंद्र (दादर पश्चिम)',
    name_mr: 'आपले सरकार सेवा केंद्र (दादर पश्चिम)',
    type: 'DIGITAL_SEVA',
    district: 'Mumbai City',
    district_hi: 'मुंबई शहर',
    district_mr: 'मुंबई शहर',
    state: 'Maharashtra',
    address: 'Shop 4, Municipal Market Building, NC Kelkar Road, Dadar West, Mumbai',
    address_hi: 'दुकान 4, म्युनिसिपल मार्केट, दादर पश्चिम, मुंबई',
    address_mr: 'दुकान क्र. ४, पालिका इमारत, दादर पश्चिम, मुंबई',
    pincode: '400028',
    phone: '+91 22 2430 1199',
    timing: 'Mon-Sat: 09:30 AM - 06:30 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:30 - शाम 06:30',
    timing_mr: 'सोम-शनि: सकाळी ०९:३० - संध्याकाळी ०६:३०',
    officerInCharge: 'Pooja Kulkarni (VLE Manager)',
    services: ['Income Certificate', 'Domicile Certificate', 'PMAY Online Desk', 'MUDRA Application'],
    services_hi: ['आय प्रमाण पत्र', 'अधिवास प्रमाण पत्र', 'पीएम आवास योजना', 'मुद्रा ऋण सहायता'],
    services_mr: ['उत्पन्नाचा दाखला', 'रहिवासी दाखला', 'पीएम आवास योजना', 'मुद्रा कर्ज अर्ज मदत'],
    coordinates: { lat: 19.0178, lng: 72.8478 }
  },
  {
    id: 'csc-mumbai-02',
    name: 'Maha-e-Seva Kendra (Andheri East)',
    name_hi: 'महा-ई-सेवा केंद्र (अंधेरी पूर्व)',
    name_mr: 'महा-ई-सेवा केंद्र (अंधेरी पूर्व, मुंबई)',
    type: 'CSC',
    district: 'Mumbai Suburban',
    district_hi: 'मुंबई उपनगर',
    district_mr: 'मुंबई उपनगर',
    state: 'Maharashtra',
    address: 'Opposite Railway Station, Old Nagardas Road, Andheri East, Mumbai',
    address_hi: 'रेलवे स्टेशन के सामने, पुराना नागरदास रोड, अंधेरी पूर्व, मुंबई',
    address_mr: 'रेल्वे स्टेशन समोर, जुना नागरदास रोड, अंधेरी पूर्व, मुंबई',
    pincode: '400069',
    phone: '+91 22 2683 4510',
    timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
    officerInCharge: 'Rajendra Joshi (Center In-Charge)',
    services: ['Ladki Bahin Portal Desk', 'Ayushman Golden Card', 'Senior Citizen Pension Verification'],
    services_hi: ['लाडकी बहीण सहायता', 'आयुष्मान गोल्डन कार्ड', 'वरिष्ठ नागरिक पेंशन'],
    services_mr: ['लाडकी बहीण योजना कक्ष', 'आयुष्मान गोल्डन कार्ड', 'ज्येष्ठ नागरिक पेन्शन नोंदणी'],
    coordinates: { lat: 19.1136, lng: 72.8697 }
  },

  // Nagpur Center
  {
    id: 'csc-nagpur-01',
    name: 'Common Service Center (Sitabuldi, Nagpur)',
    name_hi: 'कॉमन सर्विस सेंटर (सीताबर्डी, नागपुर)',
    name_mr: 'कॉमन सर्व्हिस सेंटर (सीताबर्डी, नागपूर)',
    type: 'CSC',
    district: 'Nagpur',
    district_hi: 'नागपुर',
    district_mr: 'नागपूर',
    state: 'Maharashtra',
    address: 'Main Road, Near Variety Square, Sitabuldi, Nagpur',
    address_hi: 'मेन रोड, वैरायटी स्क्वायर के पास, सीताबर्डी, नागपुर',
    address_mr: 'मुख्य रस्ता, व्हरायटी स्क्वेअर जवळ, सीताबर्डी, नागपूर',
    pincode: '440012',
    phone: '+91 712 254 1180',
    timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
    officerInCharge: 'Nitin Deshmukh (VLE)',
    services: ['PM-KISAN e-KYC', 'Sanjay Gandhi Niradhar Scheme', 'Farmer Electricity Subsidy'],
    services_hi: ['पीएम-किसान ई-केवाईसी', 'संजय गांधी निराधार योजना', 'किसान बिजली सब्सिडी'],
    services_mr: ['पीएम-किसान ई-केवायसी', 'संजय गांधी निराधार योजना', 'शेतकरी वीज सवलत अर्ज'],
    coordinates: { lat: 21.1458, lng: 79.0882 }
  },

  // Nashik Center
  {
    id: 'csc-nashik-01',
    name: 'Maha-e-Seva Kendra (CBS, Nashik)',
    name_hi: 'महा-ई-सेवा केंद्र (सीबीएस, नासिक)',
    name_mr: 'महा-ई-सेवा केंद्र (मध्यवर्ती बस स्थानक, नाशिक)',
    type: 'DIGITAL_SEVA',
    district: 'Nashik',
    district_hi: 'नासिक',
    district_mr: 'नाशिक',
    state: 'Maharashtra',
    address: 'Opposite Central Bus Stand (CBS), Old Agra Road, Nashik',
    address_hi: 'सेंट्रल बस स्टैंड के सामने, पुराना आगरा रोड, नासिक',
    address_mr: 'मध्यवर्ती बस स्थानकासमोर, जुना आग्रा रोड, नाशिक',
    pincode: '422001',
    phone: '+91 253 257 8840',
    timing: 'Mon-Sat: 09:30 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:30 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:३० - संध्याकाळी ०६:००',
    officerInCharge: 'Ganesh Borse (Manager)',
    services: ['7/12 Land Mutation', 'Ladki Bahin Enrollment', 'PM Vishwakarma Biometric'],
    services_hi: ['7/12 खतौनी नामांतरण', 'लाडकी बहीण नामांकन', 'पीएम विश्वकर्मा बायोमेट्रिक'],
    services_mr: ['७/१२ फेरफार व उतारा', 'लाडकी बहीण नोंदणी', 'पीएम विश्वकर्मा बायोमेट्रिक'],
    coordinates: { lat: 19.9975, lng: 73.7898 }
  },

  // Kolhapur Center
  {
    id: 'csc-kolhapur-01',
    name: 'Aaple Sarkar Kendra (Rajaram Road, Kolhapur)',
    name_hi: 'आपले सरकार केंद्र (राजाराम रोड, कोल्हापुर)',
    name_mr: 'आपले सरकार केंद्र (राजाराम रोड, कोल्हापूर)',
    type: 'DIGITAL_SEVA',
    district: 'Kolhapur',
    district_hi: 'कोल्हापुर',
    district_mr: 'कोल्हापूर',
    state: 'Maharashtra',
    address: 'Near CBS, Rajaram Road, Shahupuri, Kolhapur',
    address_hi: 'सीबीएस के पास, राजाराम रोड, शाहूपुरी, कोल्हापुर',
    address_mr: 'सीबीएस जवळ, राजाराम रोड, शाहूपुरी, कोल्हापूर',
    pincode: '416001',
    phone: '+91 231 265 4321',
    timing: 'Mon-Sat: 09:30 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:30 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:३० - संध्याकाळी ०६:००',
    officerInCharge: 'Anand Patil (VLE)',
    services: ['Farmer Schemes eKYC', 'Ladki Bahin Yojana Desk', 'Income Certificate'],
    services_hi: ['किसान योजना ई-केवाईसी', 'लाडकी बहीण योजना', 'आय प्रमाण पत्र'],
    services_mr: ['शेतकरी योजना ई-केवायसी', 'लाडकी बहीण योजना कक्ष', 'उत्पन्नाचा दाखला'],
    coordinates: { lat: 16.7050, lng: 74.2433 }
  },

  // Chhatrapati Sambhajinagar Center
  {
    id: 'csc-aurangabad-01',
    name: 'Maha-e-Seva Kendra (Kranti Chowk, Sambhajinagar)',
    name_hi: 'महा-ई-सेवा केंद्र (क्रांति चौक, संभाजीनगर)',
    name_mr: 'महा-ई-सेवा केंद्र (क्रांती चौक, छत्रपती संभाजीनगर)',
    type: 'CSC',
    district: 'Chhatrapati Sambhajinagar',
    district_hi: 'छत्रपति संभाजीनगर',
    district_mr: 'छत्रपती संभाजीनगर',
    state: 'Maharashtra',
    address: 'Shop 8, Kranti Chowk Complex, Jalna Road, Sambhajinagar',
    address_hi: 'क्रांति चौक कॉम्प्लेक्स, जालना रोड, संभाजीनगर',
    address_mr: 'दुकान ८, क्रांती चौक व्यापारी संकुल, जालना रोड, संभाजीनगर',
    pincode: '431001',
    phone: '+91 240 233 4567',
    timing: 'Mon-Sat: 09:00 AM - 06:30 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:30',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:३०',
    officerInCharge: 'Vikram Gaikwad',
    services: ['Drought Subsidy Verification', 'PM-KISAN e-KYC', 'PMAY Housing Form'],
    services_hi: ['सूखा राहत सब्सिडी', 'पीएम-किसान ई-केवाईसी', 'पीएम आवास फॉर्म'],
    services_mr: ['दुष्काळ मदत अनुदान नोंदणी', 'पीएम-किसान ई-केवायसी', 'पीएम आवास योजना अर्ज'],
    coordinates: { lat: 19.8762, lng: 75.3433 }
  },

  // Delhi NCR Centers
  {
    id: 'csc-delhi-01',
    name: 'Common Service Center (Connaught Place)',
    name_hi: 'कॉमन सर्विस सेंटर (कनॉट प्लेस)',
    name_mr: 'कॉमन सर्व्हिस सेंटर (कनॉट प्लेस, नवी दिल्ली)',
    type: 'CSC',
    district: 'Central Delhi',
    district_hi: 'मध्य दिल्ली',
    district_mr: 'मध्य दिल्ली',
    state: 'Delhi',
    address: 'Block B, Inner Circle, Connaught Place, New Delhi',
    address_hi: 'ब्लॉक बी, इनर सर्कल, कनॉट प्लेस, नई दिल्ली',
    address_mr: 'ब्लॉक बी, इनर सर्कल, कनॉट प्लेस, नवी दिल्ली',
    pincode: '110001',
    phone: '+91 11 2341 8800',
    timing: 'Mon-Fri: 09:00 AM - 05:30 PM',
    timing_hi: 'सोम-शुक्र: प्रात: 09:00 - शाम 05:30',
    timing_mr: 'सोम-शुक्र: सकाळी ०९:०० - संध्याकाळी ०५:३०',
    officerInCharge: 'Amit Kumar (Center In-Charge)',
    services: ['PM SVANidhi Loan Verification', 'Digital Life Certificate (Jeevan Pramaan)', 'PAN/Aadhaar Linking'],
    services_hi: ['पीएम स्वनिधि ऋण', 'डिजिटल जीवन प्रमाण पत्र', 'पैन/आधार लिंक'],
    services_mr: ['पीएम स्वनिधी कर्ज पडताळणी', 'डिजिटल जीवन प्रमाणपत्र', 'पॅन/आधार लिंकिंग'],
    coordinates: { lat: 28.6315, lng: 77.2167 }
  },
  {
    id: 'csc-noida-01',
    name: 'Digital Seva Kendra (Sector 62, NOIDA)',
    name_hi: 'डिजिटल सेवा केंद्र (सेक्टर 62, नोएडा)',
    name_mr: 'डिजिटल सेवा केंद्र (सेक्टर ६२, नोएडा)',
    type: 'DIGITAL_SEVA',
    district: 'Gautam Buddha Nagar',
    district_hi: 'गौतम बुद्ध नगर',
    district_mr: 'गौतम बुद्ध नगर',
    state: 'Uttar Pradesh',
    address: 'Ground Floor, C-Block Commercial Complex, Sector 62, NOIDA, UP',
    address_hi: 'सी-ब्लॉक कमर्शियल कॉम्प्लेक्स, सेक्टर 62, नोएडा, उत्तर प्रदेश',
    address_mr: 'सी-ब्लॉक व्यापारी संकुल, सेक्टर ६२, नोएडा, उत्तर प्रदेश',
    pincode: '201309',
    phone: '+91 120 456 7890',
    timing: 'Mon-Sat: 09:00 AM - 06:30 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:30',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:३०',
    officerInCharge: 'Rameshwar Verma (Nodal Officer)',
    services: ['PM-KISAN Registration', 'Kanya Sumangala Yojana', 'Ayushman Card Generation'],
    services_hi: ['पीएम-किसान पंजीकरण', 'कन्या सुमंगला योजना', 'आयुष्मान कार्ड निर्माण'],
    services_mr: ['पीएम-किसान नोंदणी', 'कन्या सुमंगला योजना', 'आयुष्मान गोल्डन कार्ड'],
    coordinates: { lat: 28.6270, lng: 77.3639 }
  },

  // Uttar Pradesh Centers (Lucknow, Varanasi, Kanpur)
  {
    id: 'csc-lucknow-01',
    name: 'Jan Seva Kendra (Hazratganj, Lucknow)',
    name_hi: 'जन सेवा केंद्र (हजरतगंज, लखनऊ)',
    name_mr: 'जन सेवा केंद्र (हजरतगंज, लखनौ)',
    type: 'CSC',
    district: 'Lucknow',
    district_hi: 'लखनऊ',
    district_mr: 'लखनौ',
    state: 'Uttar Pradesh',
    address: 'Near GPO, Hazratganj, Lucknow, UP',
    address_hi: 'जीपीओ के पास, हजरतगंज, लखनऊ, उत्तर प्रदेश',
    address_mr: 'जीपीओ जवळ, हजरतगंज, लखनौ, उत्तर प्रदेश',
    pincode: '226001',
    phone: '+91 522 223 8910',
    timing: 'Mon-Sat: 09:30 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:30 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:३० - संध्याकाळी ०६:००',
    officerInCharge: 'Alok Tripathi (VLE In-Charge)',
    services: ['Kanya Sumangala Scheme', 'PM-KISAN eKYC', 'UP Pension Portal Desk'],
    services_hi: ['कन्या सुमंगला योजना', 'पीएम-किसान ई-केवाईसी', 'यूपी पेंशन पोर्टल'],
    services_mr: ['कन्या सुमंगला योजना', 'पीएम-किसान ई-केवायसी', 'यूपी पेन्शन पोर्टल मदत'],
    coordinates: { lat: 26.8467, lng: 80.9462 }
  },
  {
    id: 'csc-varanasi-01',
    name: 'Digital Seva Kendra (Godowlia, Varanasi)',
    name_hi: 'डिजिटल सेवा केंद्र (गोदौलिया, वाराणसी)',
    name_mr: 'डिजिटल सेवा केंद्र (गोदौलिया, वाराणसी)',
    type: 'DIGITAL_SEVA',
    district: 'Varanasi',
    district_hi: 'वाराणसी',
    district_mr: 'वाराणसी',
    state: 'Uttar Pradesh',
    address: 'Near Kashi Vishwanath Corridor Road, Godowlia, Varanasi',
    address_hi: 'काशी विश्वनाथ कॉरिडोर मार्ग, गोदौलिया, वाराणसी',
    address_mr: 'काशी विश्वनाथ कॉरिडॉर रोडजवळ, गोदौलिया, वाराणसी',
    pincode: '221001',
    phone: '+91 542 245 6789',
    timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
    officerInCharge: 'Ravi Shankar Pandey',
    services: ['PM Vishwakarma Artisan Hub', 'Ayushman Golden Card', 'MUDRA Loan Assistance'],
    services_hi: ['पीएम विश्वकर्मा कारीगर केंद्र', 'आयुष्मान गोल्डन कार्ड', 'मुद्रा ऋण सहायता'],
    services_mr: ['पीएम विश्वकर्मा कारागीर कक्ष', 'आयुष्मान गोल्डन कार्ड', 'मुद्रा कर्ज मार्गदर्शन'],
    coordinates: { lat: 25.3176, lng: 82.9739 }
  },

  // Karnataka Centers (Bengaluru, Mysuru)
  {
    id: 'csc-bangalore-01',
    name: 'BangaloreOne & CSC Seva Kendra (MG Road)',
    name_hi: 'बैंगलोरवन एवं सीएससी सेवा केंद्र (एमजी रोड)',
    name_mr: 'बेंगळुरू वन आणि सीएससी सेवा केंद्र (एमजी रोड)',
    type: 'CSC',
    district: 'Bengaluru Urban',
    district_hi: 'बेंगलुरु',
    district_mr: 'बंगळुरू',
    state: 'Karnataka',
    address: 'Utility Building, MG Road, Bengaluru, Karnataka',
    address_hi: 'यूटिलिटी बिल्डिंग, एमजी रोड, बेंगलुरु, कर्नाटक',
    address_mr: 'युटिलिटी इमारत, एमजी रोड, बंगळुरू, कर्नाटक',
    pincode: '560001',
    phone: '+91 80 2296 7100',
    timing: 'Mon-Sat: 08:30 AM - 07:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 08:30 - शाम 07:00',
    timing_mr: 'सोम-शनि: सकाळी ०८:३० - संध्याकाळी ०७:००',
    officerInCharge: 'K. Venkatesh (Operations Manager)',
    services: ['Gruha Lakshmi Scheme Desk', 'Yuva Nidhi Scheme', 'Aadhaar Demographic Update', 'Ayushman PM-JAY'],
    services_hi: ['गृह लक्ष्मी योजना', 'युवा निधि योजना', 'आधार जनसांख्यिकी अपडेट', 'आयुष्मान पीएम-जेएवाई'],
    services_mr: ['गृह लक्ष्मी योजना कक्ष', 'युवा निधी योजना', 'आधार माहिती अपडेट', 'आयुष्मान पीएम-जेएवाय'],
    coordinates: { lat: 12.9716, lng: 77.5946 }
  },

  // Gujarat Centers (Ahmedabad, Surat)
  {
    id: 'csc-ahmedabad-01',
    name: 'Jan Seva Kendra (Navrangpura, Ahmedabad)',
    name_hi: 'जन सेवा केंद्र (नवरंगपुरा, अहमदाबाद)',
    name_mr: 'जन सेवा केंद्र (नवरंगपुरा, अहमदाबाद)',
    type: 'CSC',
    district: 'Ahmedabad',
    district_hi: 'अहमदाबाद',
    district_mr: 'अहमदाबाद',
    state: 'Gujarat',
    address: 'Near Gujarat University, Navrangpura, Ahmedabad, Gujarat',
    address_hi: 'गुजरात यूनिवर्सिटी के पास, नवरंगपुरा, अहमदाबाद, गुजरात',
    address_mr: 'गुजरात विद्यापीठाजवळ, नवरंगपुरा, अहमदाबाद, गुजरात',
    pincode: '380009',
    phone: '+91 79 2630 4512',
    timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
    officerInCharge: 'Jayesh Patel',
    services: ['PM Surya Ghar Gujarat Desk', 'Maa Amrutam / Ayushman Card', 'PM-KISAN e-KYC'],
    services_hi: ['पीएम सूर्य घर गुजरात डेस्क', 'मां अमृतम / आयुष्मान कार्ड', 'पीएम-किसान ई-केवाईसी'],
    services_mr: ['पीएम सूर्य घर गुजरात कक्ष', 'आयुष्मान गोल्डन कार्ड', 'पीएम-किसान ई-केवायसी'],
    coordinates: { lat: 23.0225, lng: 72.5714 }
  },

  // Tamil Nadu Centers (Chennai)
  {
    id: 'csc-chennai-01',
    name: 'e-Sevai Center (T. Nagar, Chennai)',
    name_hi: 'ई-सेवई केंद्र (टी. नगर, चेन्नई)',
    name_mr: 'ई-सेवई केंद्र (टी. नगर, चेन्नई)',
    type: 'CSC',
    district: 'Chennai',
    district_hi: 'चेन्नई',
    district_mr: 'चेन्नई',
    state: 'Tamil Nadu',
    address: 'Pondy Bazaar Main Road, T. Nagar, Chennai, Tamil Nadu',
    address_hi: 'पोंडी बाजार मेन रोड, टी. नगर, चेन्नई, तमिलनाडु',
    address_mr: 'पोंडी बाजार मुख्य रस्ता, टी. नगर, चेन्नई, तामिळनाडू',
    pincode: '600017',
    phone: '+91 44 2434 5678',
    timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
    officerInCharge: 'M. Senthil Nathan',
    services: ['Kalaignar Magalir Urimai Thogai Desk', 'Moovalur Ramamirtham Ammaiyar Scheme', 'Aadhaar e-Sevai'],
    services_hi: ['कलैगनार मगलिर योजना', 'मूवलुर रामामिरथम योजना', 'आधार ई-सेवई'],
    services_mr: ['महिला आर्थिक योजना कक्ष', 'विद्यार्थी शिष्यवृत्ती नोंदणी', 'आधार ई-सेवा'],
    coordinates: { lat: 13.0827, lng: 80.2707 }
  },

  // West Bengal Centers (Kolkata)
  {
    id: 'csc-kolkata-01',
    name: 'Bangla Sahayata Kendra (Salt Lake, Kolkata)',
    name_hi: 'बांग्ला सहायता केंद्र (साल्ट लेक, कोलकाता)',
    name_mr: 'बांग्ला सहायता केंद्र (सॉल्ट लेक, कोलकाता)',
    type: 'CSC',
    district: 'Kolkata',
    district_hi: 'कोलकाता',
    district_mr: 'कोलकाता',
    state: 'West Bengal',
    address: 'Sector 1, Bidhannagar, Salt Lake, Kolkata, West Bengal',
    address_hi: 'सेक्टर 1, बिधाननगर, साल्ट लेक, कोलकाता, पश्चिम बंगाल',
    address_mr: 'सेक्टर १, बिधाननगर, सॉल्ट लेक, कोलकाता, पश्चिम बंगाल',
    pincode: '700064',
    phone: '+91 33 2334 8920',
    timing: 'Mon-Sat: 10:00 AM - 05:30 PM',
    timing_hi: 'सोम-शनि: प्रात: 10:00 - शाम 05:30',
    timing_mr: 'सोम-शनि: सकाळी १०:०० - संध्याकाळी ०५:३०',
    officerInCharge: 'Subhashish Mukherjee',
    services: ['Lakshmir Bhandar Scheme', 'Krishak Bandhu Assistance', 'Swasthya Sathi Golden Card'],
    services_hi: ['लक्ष्मी भंडार योजना', 'कृषक बंधु सहायता', 'स्वास्थ्य साथी कार्ड'],
    services_mr: ['लक्ष्मी भंडार योजना', 'कृषक बंधू मदत कक्ष', 'आरोग्य साथी कार्ड नोंदणी'],
    coordinates: { lat: 22.5726, lng: 88.3639 }
  },

  // Rajasthan Centers (Jaipur)
  {
    id: 'csc-jaipur-01',
    name: 'E-Mitra Seva Kendra (C-Scheme, Jaipur)',
    name_hi: 'ई-मित्र सेवा केंद्र (सी-स्कीम, जयपुर)',
    name_mr: 'ई-मित्र सेवा केंद्र (सी-स्कीम, जयपूर)',
    type: 'DIGITAL_SEVA',
    district: 'Jaipur',
    district_hi: 'जयपुर',
    district_mr: 'जयपूर',
    state: 'Rajasthan',
    address: 'Ashok Marg, C-Scheme, Jaipur, Rajasthan',
    address_hi: 'अशोक मार्ग, सी-स्कीम, जयपुर, राजस्थान',
    address_mr: 'अशोक मार्ग, सी-स्कीम, जयपूर, राजस्थान',
    pincode: '302001',
    phone: '+91 141 237 8901',
    timing: 'Mon-Sat: 09:30 AM - 06:30 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:30 - शाम 06:30',
    timing_mr: 'सोम-शनि: सकाळी ०९:३० - संध्याकाळी ०६:३०',
    officerInCharge: 'Deepak Sharma (E-Mitra Head)',
    services: ['Jan Aadhaar Enrollment', 'Chiranjeevi Health Scheme', 'Palanhar Scheme Verification'],
    services_hi: ['जन आधार नामांकन', 'चिरंजीवी स्वास्थ्य योजना', 'पालनहार योजना'],
    services_mr: ['जन आधार नोंदणी', 'चिरंजीवी आरोग्य योजना', 'पालनहार योजना पडताळणी'],
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },

  // Telangana Centers (Hyderabad)
  {
    id: 'csc-hyderabad-01',
    name: 'MeeSeva & CSC Digital Hub (Ameerpet, Hyderabad)',
    name_hi: 'मीसेवा एवं सीएससी डिजिटल केंद्र (अमीरपेट, हैदराबाद)',
    name_mr: 'मीसेवा व सीएससी डिजिटल केंद्र (अमीरपेट, हैदराबाद)',
    type: 'CSC',
    district: 'Hyderabad',
    district_hi: 'हैदराबाद',
    district_mr: 'हैद्राबाद',
    state: 'Telangana',
    address: 'Opposite Metro Station, Main Road, Ameerpet, Hyderabad',
    address_hi: 'मेट्रो स्टेशन के सामने, मुख्य मार्ग, अमीरपेट, हैदराबाद',
    address_mr: 'मेट्रो स्टेशन समोर, मुख्य रस्ता, अमीरपेट, हैदराबाद',
    pincode: '500016',
    phone: '+91 40 2373 8910',
    timing: 'Mon-Sat: 09:00 AM - 07:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 07:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०७:००',
    officerInCharge: 'Ch. Srinivas Rao',
    services: ['Rythu Bandhu eKYC', 'Maha Lakshmi Scheme Desk', 'PMAY Urban', 'Aadhaar Services'],
    services_hi: ['रैतु बंधु ई-केवाईसी', 'महालक्ष्मी योजना', 'पीएम आवास शहरी', 'आधार सेवाएं'],
    services_mr: ['रैतु बंधू ई-केवायसी', 'महालक्ष्मी योजना कक्ष', 'पीएम आवास योजना', 'आधार सेवा'],
    coordinates: { lat: 17.3850, lng: 78.4867 }
  },

  // Madhya Pradesh Centers (Indore)
  {
    id: 'csc-indore-01',
    name: 'MP e-Seva Kendra (Rajwada, Indore)',
    name_hi: 'एमपी ई-सेवा केंद्र (राजवाड़ा, इंदौर)',
    name_mr: 'एमपी ई-सेवा केंद्र (राजवाडा, इंदूर)',
    type: 'CSC',
    district: 'Indore',
    district_hi: 'इंदौर',
    district_mr: 'इंदूर',
    state: 'Madhya Pradesh',
    address: 'Near Rajwada Palace, MG Road, Indore, Madhya Pradesh',
    address_hi: 'राजवाड़ा पैलेस के पास, एमजी रोड, इंदौर, मध्य प्रदेश',
    address_mr: 'राजवाडा महालाजवळ, एमजी रोड, इंदूर, मध्य प्रदेश',
    pincode: '452001',
    phone: '+91 731 254 7890',
    timing: 'Mon-Sat: 09:00 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:00 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:०० - संध्याकाळी ०६:००',
    officerInCharge: 'Anurag Chouhan',
    services: ['Ladli Behna Yojana Desk', 'Sambal Card Registration', 'PM-KISAN e-KYC'],
    services_hi: ['लाडली बहना योजना', 'संबल कार्ड पंजीकरण', 'पीएम-किसान ई-केवाईसी'],
    services_mr: ['लाडली बहना योजना कक्ष', 'संबल कार्ड नोंदणी', 'पीएम-किसान ई-केवायसी'],
    coordinates: { lat: 22.7196, lng: 75.8577 }
  },

  // Bihar Centers (Patna)
  {
    id: 'csc-patna-01',
    name: 'Vasudha Kendra / CSC (Boring Road, Patna)',
    name_hi: 'वसुधा केंद्र / सीएससी (बोरिंग रोड, पटना)',
    name_mr: 'वसुधा केंद्र / सीएससी (बोरिंग रोड, पाटणा)',
    type: 'CSC',
    district: 'Patna',
    district_hi: 'पटना',
    district_mr: 'पाटणा',
    state: 'Bihar',
    address: 'Near Crossing, Boring Road, Patna, Bihar',
    address_hi: 'क्रॉसिंग के पास, बोरिंग रोड, पटना, बिहार',
    address_mr: 'क्रॉसिंग जवळ, बोरिंग रोड, पाटणा, बिहार',
    pincode: '800001',
    phone: '+91 612 254 3210',
    timing: 'Mon-Sat: 09:30 AM - 06:00 PM',
    timing_hi: 'सोम-शनि: प्रात: 09:30 - शाम 06:00',
    timing_mr: 'सोम-शनि: सकाळी ०९:३० - संध्याकाळी ०६:००',
    officerInCharge: 'Manish Kumar Singh',
    services: ['Bihar Student Credit Card', 'Kushal Yuva Program', 'PM-KISAN DBT Desk'],
    services_hi: ['बिहार स्टूडेंट क्रेडिट कार्ड', 'कुशल युवा कार्यक्रम', 'पीएम-किसान डीबीटी'],
    services_mr: ['विद्यार्थी क्रेडिट कार्ड योजना', 'कौशल्य युवा कार्यक्रम', 'पीएम-किसान थेट बँक मदत'],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  }
];

export function getCenterName(center: AssistanceCenter, lang: string): string {
  if (lang === 'mr' && center.name_mr) return center.name_mr;
  if (lang === 'hi' && center.name_hi) return center.name_hi;
  return center.name;
}

export function getCenterAddress(center: AssistanceCenter, lang: string): string {
  if (lang === 'mr' && center.address_mr) return center.address_mr;
  if (lang === 'hi' && center.address_hi) return center.address_hi;
  return center.address;
}

export function getCenterServices(center: AssistanceCenter, lang: string): string[] {
  if (lang === 'mr' && center.services_mr) return center.services_mr;
  if (lang === 'hi' && center.services_hi) return center.services_hi;
  return center.services;
}

// Calculate distance between two coordinates in km (Haversine Formula)
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10; // 1 decimal place
}

// Scheme Multilingual Helpers
export function getSchemeTitle(scheme: Scheme, lang: string): string {
  if (lang === 'mr' && scheme.marathiTitle) return scheme.marathiTitle;
  if (lang === 'hi' && scheme.hindiTitle) return scheme.hindiTitle;
  return scheme.title;
}

export function getSchemeDesc(scheme: Scheme, lang: string): string {
  if (lang === 'mr' && scheme.marathiDesc) return scheme.marathiDesc;
  if (lang === 'hi' && scheme.hindiDesc) return scheme.hindiDesc;
  return scheme.shortDescription;
}

export function getSchemeBenefit(scheme: Scheme, lang: string): string {
  if (lang === 'mr' && scheme.marathiBenefit) return scheme.marathiBenefit;
  if (lang === 'hi' && scheme.hindiBenefit) return scheme.hindiBenefit;
  return scheme.maxBenefit;
}

export function getSchemeDept(scheme: Scheme, lang: string): string {
  if (lang === 'mr' && scheme.marathiDept) return scheme.marathiDept;
  if (lang === 'hi' && scheme.hindiDept) return scheme.hindiDept;
  return scheme.department;
}

export function getSchemeDocs(scheme: Scheme, lang: string): string[] {
  if (lang === 'mr' && scheme.marathiDocs) return scheme.marathiDocs;
  if (lang === 'hi' && scheme.hindiDocs) return scheme.hindiDocs;
  return scheme.requiredDocs;
}

export function getCategoryName(cat: typeof SCHEME_CATEGORIES[0], lang: string): string {
  if (lang === 'mr' && cat.name_mr) return cat.name_mr;
  if (lang === 'hi' && cat.name_hi) return cat.name_hi;
  return cat.name;
}


