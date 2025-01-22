
import mongoose, { connection } from 'mongoose'
import 'dotenv/config';

export async function connect(){
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log("Mongodb Connected successfully")
        })

        connection.on('error',()=>{
            console.log("MongoDb connection error.Please make sure mongodb is running ",error)
            process.exit();

        })


    } catch (error) {
        console.log("something went wrong :",error);

    }
    

}

