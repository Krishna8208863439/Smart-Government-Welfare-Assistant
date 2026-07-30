export interface Scheme {
  id: string;
  code: string;
  title: string;
  hindiTitle?: string;
  shortDescription: string;
  description: string;
  category: string;
  department: string;
  ministry: string;
  level: 'Central' | 'State';
  state?: string;
  maxBenefit: string;
  benefitType: string;
  deadline?: string;
  active: boolean;
  requiredDocs: string[];
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

export const SCHEMES_DATABASE: Scheme[] = [
  {
    id: 'pm-kisan',
    code: 'PM-KISAN-2026',
    title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    hindiTitle: 'प्रधानमंत्री किसान सम्मान निधि योजना',
    shortDescription: 'Income support of ₹6,000 per year in three equal installments to all landholding farmer families across India.',
    description: 'PM-KISAN is a Central Sector scheme with 100% funding from Government of India. It provides financial assistance to supplement financial needs of land-holding farmers in procuring inputs to ensure proper crop health and appropriate yields.',
    category: 'AGRICULTURE',
    department: 'Department of Agriculture & Farmers Welfare',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'Central',
    maxBenefit: '₹6,000 / year direct transfer',
    benefitType: 'Financial Assistance',
    deadline: '2026-12-31',
    active: true,
    requiredDocs: ['Aadhaar Card', 'Land Holding Record (Khasra/Khatauni)', 'Bank Passbook', 'Income Certificate'],
    applicationSteps: [
      'Enter Aadhaar Number and State details',
      'Upload Land Holding Documents (Khatoni)',
      'Provide Bank Account & IFSC details for Direct Benefit Transfer (DBT)',
      'Submit for Verification by District Nodal Officer'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 75,
      requiresFarmer: true,
      maxIncome: 300000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Farmer', 'Agriculture', 'DBT', 'Cash Transfer'],
    contactEmail: 'pmkisan-ict@gov.in',
    contactPhone: '155261 / 011-24300606'
  },
  {
    id: 'ayushman-bharat',
    code: 'AB-PMJAY-2026',
    title: 'Ayushman Bharat PM Jan Arogya Yojana (PM-JAY)',
    hindiTitle: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    shortDescription: 'Health insurance coverage up to ₹5 Lakh per family per year for secondary and tertiary hospitalisation care.',
    description: 'Ayushman Bharat PM-JAY is the world’s largest government-funded healthcare scheme covering over 12 crore poor and vulnerable families. Cashless and paperless treatment at empanelled public and private hospitals across India.',
    category: 'HEALTHCARE',
    department: 'National Health Authority (NHA)',
    ministry: 'Ministry of Health and Family Welfare',
    level: 'Central',
    maxBenefit: '₹5,000,000 / year cashless health cover',
    benefitType: 'Insurance',
    deadline: 'Ongoing',
    active: true,
    requiredDocs: ['Aadhaar Card', 'Ration Card', 'Family ID', 'Mobile Number linked with Aadhaar'],
    applicationSteps: [
      'Verify eligibility via SECC 2011 data or Ration Card',
      'Perform Instant AI eKYC through Aadhaar OTP',
      'Download Ayushman Digital Golden Card instantly'
    ],
    eligibility: {
      maxIncome: 250000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Health', 'Insurance', 'Cashless Hospitalization', 'Golden Card'],
    contactEmail: 'pmjay@nha.gov.in',
    contactPhone: '14555'
  },
  {
    id: 'pm-awas-yojana',
    code: 'PMAY-U-2026',
    title: 'Pradhan Mantri Awas Yojana - Urban & Gramin (PMAY)',
    hindiTitle: 'प्रधानमंत्री आवास योजना',
    shortDescription: 'Housing subsidy up to ₹2.67 Lakh for building or buying pucca house for EWS, LIG, and MIG families.',
    description: 'PMAY aims to ensure housing for all eligible beneficiaries in urban and rural areas. Provides interest subvention on housing loans and direct construction subsidies for underprivileged families.',
    category: 'HOUSING',
    department: 'Ministry of Housing and Urban Affairs',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'Central',
    maxBenefit: '₹2,67,000 subsidy on home loan',
    benefitType: 'Subsidy',
    deadline: '2026-11-30',
    active: true,
    requiredDocs: ['Aadhaar Card', 'Income Certificate', 'Affidavit of No Pucca House', 'Bank Statement', 'Property Deed / Layout Plan'],
    applicationSteps: [
      'Fill Online PMAY Beneficiary Form',
      'AI verification of land/house ownership history',
      'Upload Bank details & Joint Aadhaar with Spouse',
      'Geo-tagging verification by local municipal officer'
    ],
    eligibility: {
      minAge: 21,
      maxAge: 70,
      maxIncome: 600000,
      categories: ['GENERAL', 'OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Housing', 'Subsidy', 'PMAY', 'Home Loan'],
    contactEmail: 'pmay-urbannha@gov.in',
    contactPhone: '1800-11-6163'
  },
  {
    id: 'sukanya-samriddhi',
    code: 'SSY-2026',
    title: 'Sukanya Samriddhi Yojana (SSY)',
    hindiTitle: 'सुकन्या समृद्धि योजना',
    shortDescription: 'High-yield government savings scheme for girl child with tax exemption under 80C and guaranteed 8.2% interest.',
    description: 'A small deposit scheme for the girl child launched under Beti Bachao Beti Padhao campaign. Encourages parents to build a fund for the future education and marriage expenses of their female children.',
    category: 'WOMEN_EMPOWERMENT',
    department: 'Department of Posts / Ministry of Finance',
    ministry: 'Ministry of Finance',
    level: 'Central',
    maxBenefit: 'Up to ₹65 Lakhs at maturity (Tax-free)',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing',
    active: true,
    requiredDocs: ['Girl Child Birth Certificate', 'Guardian Aadhaar Card', 'Guardian PAN Card', 'Address Proof'],
    applicationSteps: [
      'Fill SSY Account Opening Form',
      'Submit Birth Certificate & Guardian KYC',
      'Deposit minimum initial amount of ₹250',
      'Get Passbook issued online/at Post Office'
    ],
    eligibility: {
      maxAge: 10,
      gender: 'FEMALE'
    },
    tags: ['Girl Child', 'Women', 'Savings', 'Tax Benefit'],
    contactEmail: 'support-postoffice@gov.in',
    contactPhone: '1800-266-6868'
  },
  {
    id: 'pm-mudra-yojana',
    code: 'PMMY-2026',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    hindiTitle: 'प्रधानमंत्री मुद्रा योजना',
    shortDescription: 'Collateral-free loans up to ₹20 Lakhs for micro-enterprises, small businesses, and startups under Shishu, Kishor & Tarun.',
    description: 'PMMY provides loan facility to non-corporate, non-farm small/micro enterprises. Loans are available through Commercial Banks, RRBs, Small Finance Banks, MFIs, and NBFCs without collateral requirement.',
    category: 'STARTUP',
    department: 'Department of Financial Services',
    ministry: 'Ministry of Finance',
    level: 'Central',
    maxBenefit: '₹20,000,000 collateral-free business loan',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing',
    active: true,
    requiredDocs: ['PAN Card', 'Aadhaar Card', 'Business Registration / Udyam Certificate', 'Last 6 Months Bank Statement', 'Project Proposal'],
    applicationSteps: [
      'Choose Loan Category: Shishu (Up to ₹50k), Kishor (Up to ₹5L), Tarun (Up to ₹20L)',
      'Upload Business Plan & Quotations',
      'Complete Instant AI Credit Check',
      'E-Sign loan agreement for immediate bank sanction'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 65,
      occupations: ['Self Employed', 'Business Owner', 'Entrepreneur', 'Shopkeeper']
    },
    tags: ['Business Loan', 'MSME', 'Startup', 'Collateral Free'],
    contactEmail: 'mudra@gov.in',
    contactPhone: '1800-180-1111'
  },
  {
    id: 'pm-matru-vandana',
    code: 'PMMVY-2026',
    title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    hindiTitle: 'प्रधानमंत्री मातृ वंदना योजना',
    shortDescription: 'Financial incentive of ₹5,000 to pregnant women and lactating mothers for first living child.',
    description: 'A direct benefit transfer scheme for pregnant women to compensate for wage loss and support nutrition requirements during maternity.',
    category: 'CHILD_WELFARE',
    department: 'Ministry of Women and Child Development',
    ministry: 'Ministry of Women and Child Development',
    level: 'Central',
    maxBenefit: '₹5,000 cash incentive in 3 installments',
    benefitType: 'Financial Assistance',
    deadline: 'Ongoing',
    active: true,
    requiredDocs: ['Aadhaar Card', 'MCP Card (Mother & Child Protection)', 'Bank Passbook', 'Husband Aadhaar'],
    applicationSteps: [
      'Register at nearest Anganwadi Center or online portal',
      'Submit Pregnancy registration proof & MCP Card',
      'Verify Bank DBT account details'
    ],
    eligibility: {
      minAge: 19,
      maxAge: 45,
      gender: 'FEMALE'
    },
    tags: ['Maternity', 'Women', 'Child Welfare', 'DBT'],
    contactEmail: 'pmmvy-mwd@gov.in',
    contactPhone: '011-23382393'
  },
  {
    id: 'pm-svanidhi',
    code: 'PMSVANIDHI-2026',
    title: 'PM Street Vendor\'s AtmaNirbhar Nidhi (PM SVANidhi)',
    hindiTitle: 'पीएम स्वनिधि योजना',
    shortDescription: 'Micro-credit loan facility up to ₹50,000 with 7% interest subsidy for urban street vendors.',
    description: 'Empowers street vendors to resume their livelihoods by facilitating collateral-free working capital loans with digital payment cashback incentives.',
    category: 'EMPLOYMENT',
    department: 'Ministry of Housing and Urban Affairs',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'Central',
    maxBenefit: '₹50,000 loan + 7% interest cashback',
    benefitType: 'Financial Assistance',
    deadline: '2026-12-31',
    active: true,
    requiredDocs: ['Aadhaar Card', 'Vending Certificate / Letter of Recommendation', 'Bank Account', 'UPI ID'],
    applicationSteps: [
      'Verify Street Vendor Survey ID / LOR',
      'Fill online 1-page form',
      'Select preferred lending institution'
    ],
    eligibility: {
      minAge: 18,
      occupations: ['Street Vendor', 'Hawker', 'Shopkeeper']
    },
    tags: ['Street Vendor', 'Micro Loan', 'Digital Payment', 'Cashback'],
    contactEmail: 'pmsvanidhi-mhua@gov.in',
    contactPhone: '1800-11-1979'
  },
  {
    id: 'national-scholarship',
    code: 'NSP-POSTMATRIC-2026',
    title: 'Post-Matric Scholarship for Minorities & SC/ST/OBC Students',
    hindiTitle: 'उत्तर प्रदेश / राष्ट्रीय पोस्ट मैट्रिक छात्रवृत्ति',
    shortDescription: 'Full tuition fee reimbursement and monthly maintenance allowance for post-10th & higher education students.',
    description: 'Provides financial support to eligible meritorious students from underprivileged backgrounds studying in class 11, 12, ITI, Degree, Master’s, or Doctorate programs.',
    category: 'SCHOLARSHIPS',
    department: 'Ministry of Social Justice and Empowerment',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'Central',
    maxBenefit: 'Up to ₹100,000 / year tuition + stipend',
    benefitType: 'Financial Assistance',
    deadline: '2026-10-31',
    active: true,
    requiredDocs: ['Aadhaar Card', 'Income Certificate (< ₹2.5L)', 'Caste/Category Certificate', 'Fee Receipt & Bonafide Certificate', 'Marksheet of previous exam'],
    applicationSteps: [
      'Register on One-Time Student Registration (OTR)',
      'Upload Institute Verification form & Marksheet',
      'Institute approval & Automated DBT Disbursal'
    ],
    eligibility: {
      minAge: 15,
      maxAge: 30,
      requiresStudent: true,
      maxIncome: 250000,
      categories: ['OBC', 'SC', 'ST', 'EWS']
    },
    tags: ['Scholarship', 'Education', 'Students', 'College Fee'],
    contactEmail: 'helpdesk@nsp.gov.in',
    contactPhone: '0120-6619540'
  }
];

export const SCHEME_CATEGORIES = [
  { id: 'AGRICULTURE', name: 'Agriculture & Farming', icon: 'Sprout', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' },
  { id: 'EDUCATION', name: 'Education & Schools', icon: 'GraduationCap', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
  { id: 'SCHOLARSHIPS', name: 'Scholarships & Stipends', icon: 'BookOpen', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300' },
  { id: 'HEALTHCARE', name: 'Healthcare & Insurance', icon: 'HeartPulse', color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300' },
  { id: 'HOUSING', name: 'Housing & Urban', icon: 'Home', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
  { id: 'EMPLOYMENT', name: 'Employment & Skill', icon: 'Briefcase', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
  { id: 'WOMEN_EMPOWERMENT', name: 'Women Empowerment', icon: 'UserCheck', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300' },
  { id: 'SENIOR_CITIZENS', name: 'Senior Citizens & Pension', icon: 'ShieldCheck', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300' },
  { id: 'STARTUP', name: 'Startup & MSME Loans', icon: 'Rocket', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300' },
  { id: 'CHILD_WELFARE', name: 'Child Welfare & Nutrition', icon: 'Baby', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300' }
];

export const ASSISTANCE_CENTERS = [
  {
    id: 'csc-001',
    name: 'Jan Seva Kendra (CSC) - Connaught Place',
    type: 'CSC Center',
    address: 'Shop 14, Block A, Inner Circle, CP',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '+91 98765 43210',
    lat: 28.6315,
    lng: 77.2167,
    timing: '9:00 AM - 6:00 PM (Mon-Sat)'
  },
  {
    id: 'csc-002',
    name: 'Digital Seva Kendra - Bandra West',
    type: 'Digital Seva Kendra',
    address: 'Near Railway Station, SV Road, Bandra West',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    pincode: '400050',
    phone: '+91 98123 45678',
    lat: 19.0596,
    lng: 72.8295,
    timing: '9:30 AM - 7:00 PM (Mon-Sat)'
  },
  {
    id: 'csc-003',
    name: 'Tehsil Office Service Hub - MG Road',
    type: 'Taluka/District Office',
    address: 'Sub-Divisional Magistrate Office Complex, MG Road',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    pincode: '560001',
    phone: '+91 80 2234 5678',
    lat: 12.9716,
    lng: 77.5946,
    timing: '10:00 AM - 5:30 PM (Mon-Fri)'
  },
  {
    id: 'csc-004',
    name: 'State Bank Citizen Financial Service Point',
    type: 'Bank Kiosk',
    address: 'Main Market, Civil Lines',
    district: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226001',
    phone: '+91 522 245 6789',
    lat: 26.8467,
    lng: 80.9462,
    timing: '10:00 AM - 4:00 PM (Mon-Sat)'
  }
];
