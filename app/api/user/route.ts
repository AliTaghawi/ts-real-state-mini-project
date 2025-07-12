import { NextRequest, NextResponse } from "next/server";
import { StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import RSUser from "@/models/RSUser";
import { verifyPassword } from "@/utils/auth";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: StatusMessages.UNAUTHORIZED },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }

    const user = await RSUser.findOne({ email: session?.user?.email });
    if (!user) {
      return NextResponse.json(
        { error: StatusMessages.NOTFOUND_USER },
        { status: StatusCodes.NOTFOUND }
      );
    }

    return NextResponse.json({ user }, { status: StatusCodes.OK });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: StatusMessages.SERVER_ERROR },
      { status: StatusCodes.SERVER_ERROR }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: StatusMessages.UNAUTHORIZED },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }

    const user = await RSUser.findOne({ email: session?.user?.email }).select(
      "+password"
    );
    if (!user) {
      return NextResponse.json(
        { error: StatusMessages.NOTFOUND_USER },
        { status: StatusCodes.NOTFOUND }
      );
    }

    const { password, fullName, showName, phone, bio, showSocials } =
      await req.json();

    // validation

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: StatusMessages.WRONG_PASSWORD },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    fullName ? (user.fullName = fullName) : null;
    showName ? (user.showName = showName) : null;
    phone ? (user.phone = phone) : null;
    bio ? (user.boi = bio) : null;
    showSocials.email ? (user.showSocials.email = showSocials.email) : null;
    showSocials.phone ? (user.showSocials.phone = showSocials.phone) : null;
    user.save();

    console.log(user);

    return NextResponse.json(
      { message: StatusMessages.USER_UPDATED },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: StatusMessages.SERVER_ERROR },
      { status: StatusCodes.SERVER_ERROR }
    );
  }
}
