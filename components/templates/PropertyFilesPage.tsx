import FileCard from "@/modules/FileCard";

const PropertyFilesPage = ({ files }: { files: any[] }) => {
  // console.log(files)
  return (
    <div className="sm:flex sm:gap-8 items-start">
      <aside className="border-2 border-sky-400 dark:border-sky-800 rounded-lg w-[200px] min-h-[400px]"></aside>
      <main className="w-full sm:w-[calc(100%-200px-2rem)] grid grid-cols-1 min-[820px]:grid-cols-2 min-[1150px]:grid-cols-3 gap-4 mb-8">
        {files.map((item: any) => (
          <FileCard file={JSON.parse(JSON.stringify(item))} key={item._id} />
        ))}
      </main>
    </div>
  );
};

export default PropertyFilesPage;
