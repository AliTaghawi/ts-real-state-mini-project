import connectDB from "@/utils/connectDB";
import RSFile from "@/models/RSFile";
import { notFound } from "next/navigation";
import FileDetailsPage from "@/templates/FileDetailsPage";
export const dynamicParams = true;

export async function generateStaticParams() {
  await connectDB();
  const files = await RSFile.aggregate([
    { $match: { published: true } },
    { $project: { _id: 1 } },
    { $limit: 2 }
  ]);
  return files.map((file: any) => ({ fileId: file._id.toString() }));
}

const FileDetails = async ({ params }: { params: Promise<{ fileId: string }> }) => {
  await connectDB();
  const { fileId } = await params;
  const file = await RSFile.findOne({ _id: fileId }).lean();
  if (!file) notFound();
  return (
    <FileDetailsPage file={file} />
  )
};

export default FileDetails;