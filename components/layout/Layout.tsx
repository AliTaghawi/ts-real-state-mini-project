import Header from "@/layout/Header";
import { ChildrenType } from "@/types/types";

function Layout({children}: ChildrenType) {
  return (
    <div className="max-w-[1280px] mx-auto px-2">
      <Header/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;