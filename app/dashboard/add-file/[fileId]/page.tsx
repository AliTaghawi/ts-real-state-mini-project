import { notFound } from "next/navigation";
import { isValidObjectId } from "mongoose";
import EditFilePage from "@/templates/EditFilePage";
// import connectDB from "@/utils/connectDB";
// import { getServerSession } from "next-auth";
// import RSFile from "@/models/RSFile";

const EditFile = async ({
  params,
}: {
  params: Promise<{ fileId: string }>;
}) => {
  const { fileId } = await params;
  if (!isValidObjectId(fileId)) notFound();
  // if (!isValidObjectId(fileId)) return notFound()
  // await connectDB()
  // const file = await RSFile.findOne({_id: fileId})
  // if (!file) return notFound()
  // console.log(file)

  // به خاطر اینکه کل داشبورد کلاینت ساید هست این قسمت رو هم کلاینت ساید ایجاد میکنم

  return <EditFilePage id={fileId} />;
};

export default EditFile;
