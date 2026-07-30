import { NextResponse } from 'next/server';
import { parseDocumentOCR } from '@/lib/ocr-engine';

export async function POST(request: Request) {
  try {
    const { docType, filename } = await request.json();
    const extractedData = parseDocumentOCR(docType || 'Aadhaar', filename || 'sample_document.pdf');

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      ocrResult: extractedData
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Document OCR parsing failed' },
      { status: 500 }
    );
  }
}
