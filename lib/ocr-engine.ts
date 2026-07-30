export interface ExtractedDocumentData {
  docType: 'Aadhaar' | 'PAN' | 'Income' | 'Caste' | 'Domicile' | 'BankPassbook' | 'Other';
  name?: string;
  dob?: string;
  docNumber?: string;
  gender?: string;
  address?: string;
  incomeAnnual?: number;
  category?: string;
  issueDate?: string;
  issuingAuthority?: string;
  ifscCode?: string;
  accountNumber?: string;
  confidenceScore: number;
}

export function parseDocumentOCR(docType: string, filename: string): ExtractedDocumentData {
  // Intelligent mock AI OCR parser simulating vision model entity extraction
  switch (docType) {
    case 'Aadhaar':
      return {
        docType: 'Aadhaar',
        name: 'Rajesh Kumar Sharma',
        dob: '1988-04-14',
        docNumber: 'XXXX-XXXX-8912',
        gender: 'Male',
        address: 'H-42, Sector 15, Near City Center, NOIDA, Gautam Buddha Nagar, Uttar Pradesh - 201301',
        confidenceScore: 0.98
      };

    case 'PAN':
      return {
        docType: 'PAN',
        name: 'Rajesh Kumar Sharma',
        dob: '1988-04-14',
        docNumber: 'ABCPS8912K',
        issuingAuthority: 'Income Tax Department, Govt of India',
        confidenceScore: 0.97
      };

    case 'Income':
      return {
        docType: 'Income',
        name: 'Rajesh Kumar Sharma',
        incomeAnnual: 180000,
        docNumber: 'INC/UP/2026/789123',
        issueDate: '2026-01-15',
        issuingAuthority: 'Tehsildar Office, NOIDA',
        confidenceScore: 0.95
      };

    case 'Caste':
      return {
        docType: 'Caste',
        name: 'Rajesh Kumar Sharma',
        category: 'OBC',
        docNumber: 'CST/UP/2025/456123',
        issuingAuthority: 'District Magistrate Office',
        confidenceScore: 0.96
      };

    case 'BankPassbook':
      return {
        docType: 'BankPassbook',
        name: 'Rajesh Kumar Sharma',
        accountNumber: '3819001298371',
        ifscCode: 'SBIN0001234',
        issuingAuthority: 'State Bank of India',
        confidenceScore: 0.99
      };

    default:
      return {
        docType: 'Other',
        name: 'Rajesh Kumar Sharma',
        docNumber: 'DOC-2026-99128',
        confidenceScore: 0.90
      };
  }
}
