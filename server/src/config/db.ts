import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/aroundu";

const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("mongoDB connected !")
    }catch(error){
    console.error("DB connection failed", error);
    process.exit(1);
    }
};

export default connectDB;