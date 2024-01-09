import { Semi } from "@/utils/postgreConnect";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
  const {id} = params;
  console.log("From Single API");
  try {
    const data = await Semi.findOne({
      where: {
        id: id,
      },
    });
    if (!data) {
      return NextResponse.json({ message: "Data not found!" }, { status: 500 });
    }
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Database Conncetion Faild!!" },
      { status: 500 }
    );
  }
};

export const PUT = async (res, {params}) => {
  const {id} = params;
  try {
    const data = await res.json();
    await Semi.update(
      data,
      {
        where: {
          id: id,
        },
      }
    );
    return NextResponse.json({ message: "Succesfull!!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Faild to upadate seminar!!" },
      { status: 500 }
    );
  }
};
