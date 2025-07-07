import { ChildrenType } from "@/types/types";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function Layout({ children }: ChildrenType) {
  return (
    <div className="flex flex-col max-w-[1280px] mx-auto px-2 min-h-[100vh]">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
