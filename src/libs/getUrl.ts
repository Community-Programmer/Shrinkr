import urlModel from "@/models/urlModel"
import { connectToDb } from "./db";

export const getShortUrl = async(params:string) => {
        connectToDb();
        const data = await urlModel.findOne({shortUrlId: params});
        return data;  
}