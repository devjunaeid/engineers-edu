import mongoose from "mongoose";

export async function connectMongo(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected!!!!");
    } catch (error) {
        console.log("Error while connecting!!!", error);
    }
}