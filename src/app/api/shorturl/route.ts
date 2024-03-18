import { connectToDb } from '@/libs/db';
import urlModel from '@/models/urlModel';
import { nanoid } from 'nanoid';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import QRCode from 'qrcode';

const generateQR = async (text: string) => {
    try {
        const qrData = await QRCode.toDataURL(text);
        return qrData;
    } catch (err) {
      console.error(err)
    }
  }



export const POST = async (req:NextRequest,res:NextResponse) => {
    const {longUrl} = await req.json();

    const headersList = headers();
    const hostname = headersList.get('x-forwarded-host');

    try {

        connectToDb();

        const shortUrlId = nanoid(8);
        const shortedUrl = `http://${hostname}/${shortUrlId}`;
        const urlQrData = await generateQR(shortedUrl);
        
        const shortUrlData = new urlModel({
            originalUrl: longUrl,
            shortUrlId: shortUrlId,
            QrData: urlQrData
          });
          await shortUrlData.save();
        return NextResponse.json({shortUrl:shortedUrl,data: shortUrlData})
    } catch (error) {
        console.log(error)
    }
}