import RSUser from "@/models/RSUser";
import { StatusCodes, StatusMessages } from "@/types/enums";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password, confirmPassword } = await req.json();

    // validation

    const hashedPassword = await hashPassword(password);

    const user = await RSUser.create({ email, password: hashedPassword });

    return NextResponse.json(
      { message: StatusMessages.USER_CREATED },
      { status: StatusCodes.CREATED }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: StatusMessages.SERVER_ERROR },
      { status: StatusCodes.SERVER_ERROR }
    );
  }
}
