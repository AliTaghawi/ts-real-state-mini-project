import { NextRequest, NextResponse } from "next/server";
import { StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import RSUser from "@/models/RSUser";

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
