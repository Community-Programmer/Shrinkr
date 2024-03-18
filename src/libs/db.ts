import mongoose from "mongoose";

interface ConnectionType {
    isConnected?: number;
  }

const connection:ConnectionType = {};


export const connectToDb = async () => {

    try {

       if(connection.isConnected){
        console.log('Using existing connection');
        return;
       }
       const db = await mongoose.connect(process.env.DATABASE_CONNECTION_STRING!);
       connection.isConnected =  db.connections[0].readyState;
       console.log('Connected to database')
        
    } catch (error) {
        console.log(error)
    }
}
