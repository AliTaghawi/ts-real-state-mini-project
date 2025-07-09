import RSUser from "@/models/RSUser";
import { StatusCodes, StatusMessages } from "@/types/enums";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { registerSchema } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password, confirmPassword } = await req.json();

    try {
      await registerSchema.validateAsync({ email, password, confirmPassword });
    } catch (error: any) {
      console.log(error.details[0]);
      return NextResponse.json(
        { error: error.details[0].message },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    const existedUser = await RSUser.findOne({ email });
    if (existedUser) {
      return NextResponse.json(
        { error: StatusMessages.EXISTED_USER },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = await RSUser.create({ email, password: hashedPassword });
    console.log("created user: ", user)

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
