import RSFile from "@/models/RSFile";
import RSUser from "@/models/RSUser";
import { StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { fileValidationSchema } from "@/utils/validation";
import { isValidObjectId } from "mongoose";
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
    const file = await RSFile.findOne({ _id: fileId }).select(
      "-userId -createdAt -updatedAt"
    );
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

export async function PATCH(
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
    if (!isValidObjectId(fileId)) {
      return NextResponse.json(
        { error: StatusMessages.INVALID_DATA },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    const file = await RSFile.findOne({ _id: fileId });
    if (!file) {
      return NextResponse.json(
        { error: StatusMessages.NOTFOUND_FILE },
        { status: StatusCodes.NOTFOUND }
      );
    }

    if (!user._id.equals(file.userId)) {
      return NextResponse.json(
        { error: StatusMessages.FORBIDDEN },
        { status: StatusCodes.FORBIDDEN }
      );
    }

    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      areaMeter,
      fileType,
      address,
      rules,
      amenities,
    } = await req.json();

    try {
      await fileValidationSchema.validateAsync({
        title,
        description,
        location,
        phone,
        price,
        realState,
        constructionDate,
        category,
        areaMeter,
        fileType,
        address,
        rules,
        amenities,
      });
    } catch (error: any) {
      console.log(error.details[0]);
      return NextResponse.json(
        { error: error.details[0].message },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    file.title = title;
    file.description = description;
    file.location = location;
    file.phone = phone;
    file.price = price;
    file.realState = realState;
    file.constructionDate = constructionDate;
    file.category = category;
    file.areaMeter = areaMeter;
    file.fileType = fileType;
    file.address = address;
    file.rules = rules;
    file.amenities = amenities;
    file.save();

    console.log("Updated file: ", file);

    return NextResponse.json(
      { message: StatusMessages.FILE_UPDATED },
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
