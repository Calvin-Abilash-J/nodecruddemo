import mongoose from 'mongoose';
import dotevn from 'dotenv';

dotevn.config()
const connectDb = async() =>{
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