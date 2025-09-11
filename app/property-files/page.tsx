import RSFile from "@/models/RSFile";
import PropertyFilesPage from "@/templates/PropertyFilesPage";
import connectDB from "@/utils/connectDB";

const PropertyFiles = async () => {
  try {
    await connectDB()
    const files = await RSFile.find({published: true})
    return <PropertyFilesPage files={files} />;
  } catch (error) {
    return <h2>مشکلی پیش آمده لطفا دوباره امتحان کنید!</h2>;
  }
};

export default PropertyFiles;
