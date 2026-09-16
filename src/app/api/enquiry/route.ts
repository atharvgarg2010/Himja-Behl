import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

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

    // 2. Execute the Python script to send the email
    // We pass the data as a JSON string argument to the python script
    const scriptPath = path.join(process.cwd(), 'scripts', 'send_email.py');
    const jsonStr = JSON.stringify(data).replace(/"/g, '\\"'); // escape quotes for shell
    
    // Run the python script in the background (we don't strictly need to await it to return success to the user, 
    // but we will to ensure we catch basic errors)
    try {
      const command = `python "${scriptPath}" "${jsonStr}"`;
      await execAsync(command);
    } catch (pythonError) {
      console.error("Failed to execute python email script:", pythonError);
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
