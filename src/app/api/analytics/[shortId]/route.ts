import { connectToDb } from "@/libs/db";
import urlModel from "@/models/urlModel";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


export const GET = async(req: NextApiRequest,{ params }: { params: { shortId: string } }) => {
  connectToDb();
  const url = await urlModel.findOne({shortUrlId: params.shortId});
  
  return NextResponse.json({totalClicks: url.timestamp.length, data: url})

}