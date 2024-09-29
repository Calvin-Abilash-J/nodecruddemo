import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const connectDb = async() =>{
    console.log(process.env.DATABASE_INFO)
   try{
    await mongoose.connect(process.env.DATABASE_INFO);
    console.log('database is connected');
    
   }
   catch(error){
    console.error(error.message);
    process.exit(1);
   }
};

export default connectDb;