import Seminar from "@/models/seminarModel";
import { connectMongo } from "@/utils/dbConnect"
import { Semi } from "@/utils/postgreConnect";
import { NextResponse } from "next/server";


// export const GET = async(req) =>{
//     try {
//         await connectMongo();
//         const data = await Seminar.find({});
//         if(!data){
//             return NextResponse.json({message: "Data not found!"}, {status: 500})
//         }
//         return new NextResponse(JSON.stringify(data), {status: 200});
//     } catch (error) {
//         return NextResponse.json({message: "Database Conncetion Faild!!"}, {status: 500});
//     }
// }

export const GET = async(req) =>{
    try {
        const data = await Semi.findAll({raw: true});
        if(!data){
            return NextResponse.json({message: "Data not found!"}, {status: 500})
        }
        return new NextResponse(JSON.stringify(data), {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Database Conncetion Faild!!"}, {status: 500});
    }
}

export const POST = async(res) => {
    try {
        const data = await res.json();
        await Semi.create(data);
        return NextResponse.json({message: "Succesfull!!"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Faild to add seminar!!"}, {status: 500});
    }
}

// export const POST = async(res) => {
//     try {
//         await connectMongo();
//         const data = res.json();
//         await Seminar.create({title: data.title, date: data.date, time: data.time, registerLink: data.link})
//         return NextResponse.json({message: "Succesfull!!"}, {status: 201});
//     } catch (error) {
//         return NextResponse.json({message: "Faild to add seminar!!"}, {status: 500});
//     }
// }