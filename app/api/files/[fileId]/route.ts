import RSFile from "@/models/RSFile";
import RSUser from "@/models/RSUser";
import { StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ fileId: string }> }
) {
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

    const { fileId } = await params;
    const file = await RSFile.findOne({ _id: fileId });
    if (!file) {
      return NextResponse.json(
        { error: StatusMessages.NOTFOUND_FILE },
        { status: StatusCodes.NOTFOUND }
      );
    }

    return NextResponse.json({ file }, { status: StatusCodes.OK });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: StatusMessages.SERVER_ERROR },
      { status: StatusCodes.SERVER_ERROR }
    );
  }
}
