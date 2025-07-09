import { CgProfile } from "react-icons/cg";
import { ChildrenType } from "@/types/types";

const DashboardLayout = ({ children }: ChildrenType) => {
  return (
    <div className="flex items-start gap-8">
      <aside className="py-1.5 px-2.5 border border-sky-400 rounded-lg min-w-[200px]">
        <CgProfile className="text-4xl" />
        
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
