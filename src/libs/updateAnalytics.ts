import urlModel from "@/models/urlModel";
import { connectToDb } from "./db"

export const updateAnalytics = async(params:string)=>{

    connectToDb();

    await urlModel.findOneAndUpdate({shortUrlId:params},{$push:{timestamp:Date.now()}})

}