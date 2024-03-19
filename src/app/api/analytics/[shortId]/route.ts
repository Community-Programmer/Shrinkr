import { connectToDb } from "@/libs/db";
import urlModel from "@/models/urlModel";
import { NextRequest, NextResponse } from "next/server";


export const GET = async(req: NextRequest,{ params }: { params: { shortId: string } }) => {
  connectToDb();
  const url = await urlModel.findOne({shortUrlId: params.shortId});
  return NextResponse.json({totalClicks: url.timestamp.length, data: url});

}