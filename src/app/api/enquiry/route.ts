import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 1. Format and save to CSV
    const csvPath = path.join(process.cwd(), 'leads.csv');
    const headers = 'DateSubmitted,Name,Email,Phone,Who,LookingFor,StyleDirection,WeddingDate,Location,Functions,Colors,Inspiration,Additional\n';
    
    const lookingForJoined = Array.isArray(data.lookingFor) ? data.lookingFor.join('; ') : data.lookingFor;
    
    // Simple CSV escaping for fields that might contain commas
    const escapeCsv = (str: string | undefined | null) => {
      if (!str) return '""';
      const cleanStr = String(str).replace(/"/g, '""');
      return `"${cleanStr}"`;
    };
    
    const row = [
      new Date().toISOString(),
      escapeCsv(data.name),
      escapeCsv(data.email),
      escapeCsv(data.phone),
      escapeCsv(data.who),
      escapeCsv(lookingForJoined),
      escapeCsv(data.styleDirection),
      escapeCsv(data.date),
      escapeCsv(data.location),
      escapeCsv(data.functions),
      escapeCsv(data.colors),
      escapeCsv(data.inspiration),
      escapeCsv(data.additional),
    ].join(',') + '\n';

    // If file doesn't exist, write headers first
    if (!fs.existsSync(csvPath)) {
      fs.writeFileSync(csvPath, headers);
    }
    
    // Append the new row
    fs.appendFileSync(csvPath, row);

    // 2. Execute Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gargatharv2010@gmail.com',
          pass: 'eyfgxhcndjqhkrhh',
        },
      });

      const mailOptions = {
        from: 'gargatharv2010@gmail.com',
        to: 'gargatharv2010@gmail.com',
        subject: `New Styling Enquiry: ${data.name || 'Unknown'}`,
        text: `
New Styling Enquiry Received!

--- CONTACT DETAILS ---
Name:  ${data.name || ''}
Email: ${data.email || ''}
Phone: ${data.phone || ''}

--- STYLING DETAILS ---
Who:             ${data.who || ''}
Looking For:     ${lookingForJoined || ''}
Style Direction: ${data.styleDirection || ''}

--- WEDDING DETAILS ---
Date:      ${data.date || ''}
Location:  ${data.location || ''}
Functions: ${data.functions || ''}

--- PREFERENCES ---
Colors:      ${data.colors || ''}
Inspiration: ${data.inspiration || ''}
Additional:  ${data.additional || ''}
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Failed to send email via nodemailer:", emailError);
      // We don't fail the whole request just because email failed, since CSV saved!
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Error in enquiry API route:", error);
    return NextResponse.json(
      { error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}
