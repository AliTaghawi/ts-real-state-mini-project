import { NextRequest, NextResponse } from "next/server";
import { StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import RSUser from "@/models/RSUser";
import { verifyPassword } from "@/utils/auth";
import { userSchema } from "@/utils/validation";

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

    const { fullName, showName, phone, bio, showSocials } = await req.json();

    try {
      await userSchema.validateAsync({
        fullName,
        showName,
        phone,
        bio,
        showSocials,
      });
    } catch (error: any) {
      console.log(error.details[0]);
      return NextResponse.json(
        { error: error.details[0].message },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    // const isValid = await verifyPassword(password, user.password);
    // if (!isValid) {
    //   return NextResponse.json(
    //     { error: StatusMessages.WRONG_PASSWORD },
    //     { status: StatusCodes.UNPROCESSABLE_ENTITY }
    //   );
    // }

    fullName ? (user.fullName = fullName) : null;
    showName ? (user.showName = showName) : null;
    phone ? (user.phone = phone) : null;
    bio ? (user.boi = bio) : null;
    showSocials.email ? (user.showSocials.email = showSocials.email) : null;
    showSocials.phone ? (user.showSocials.phone = showSocials.phone) : null;
    await user.save();

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

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: StatusMessages.UNAUTHORIZED },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }

    const user = await RSUser.findOne({ email: session.user?.email }).select(
      "+password"
    );
    if (!user) {
      return NextResponse.json(
        { error: StatusMessages.NOTFOUND_USER },
        { status: StatusCodes.NOTFOUND }
      );
    }

    const { password } = await req.json();

    if (!password || password.length < 8) {
      return NextResponse.json(
        { error: StatusMessages.INVALID_DATA },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: StatusMessages.WRONG_PASSWORD },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    const result = RSUser.deleteOne({ email: user.email });
    console.log(result);

    return NextResponse.json(
      { message: StatusMessages.USER_DELETED },
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
