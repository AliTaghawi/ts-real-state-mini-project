import { use } from "react";
import EditFilePage from "@/templates/EditFilePage";
// import { notFound } from "next/navigation";
// import { isValidObjectId } from "mongoose";
// import connectDB from "@/utils/connectDB";
// import { getServerSession } from "next-auth";
// import RSFile from "@/models/RSFile";

const EditFile = async ({ params }: { params: Promise<{ fileId: string }> }) => {
  // const {fileId} = await params
  // if (!isValidObjectId(fileId)) return notFound()
  // await connectDB()
  // const file = await RSFile.findOne({_id: fileId})
  // if (!file) return notFound()
  // console.log(file)

  // به خاطر اینکه کل داشبورد کلاینت ساید هست این قسمت رو هم کلاینت ساید ایجاد میکنم
  const { fileId } = use(params);

  return <EditFilePage id={fileId} />;
};

export default EditFile;
