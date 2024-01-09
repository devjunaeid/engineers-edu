import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import bcrypt from "bcrypt";
import { User } from "@/utils/postgreConnect";
import { Op } from "sequelize";

export const POST = async (req) => {
  try {
    const {user_name, user_id, password} = await req.json();
    console.log(user_name);
    const checkExsist = await User.findAll({
      where: {
        user_id: {
          [Op.eq]: user_id,
        },
      },
    });
    console.log();
    if (checkExsist.length >= 1) {
      return NextResponse.json(
        { message: "Already Registerd!!" },
        { status: 500 }
      );
    }
    const passwdHash = await bcrypt.hash(password, 10);
    await User.create({ user_name: user_name, user_id: user_id, password: passwdHash });
    return NextResponse.json(
      { message: "Registration Succesfull!!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild to register the user!!" },
      { status: 500 }
    );
  }
};
