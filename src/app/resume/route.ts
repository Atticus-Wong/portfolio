import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'Wong_Atticus_Resume.pdf');
  
  try {
    const fileBuffer = await fs.promises.readFile(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Wong_Atticus_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error reading resume file:', error);
    return new NextResponse('Resume not found', { status: 404 });
  }
}
