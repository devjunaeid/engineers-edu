import { User } from "@/utils/postgreConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const data = await User.findAll({
      where: {
        role: "user",
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
