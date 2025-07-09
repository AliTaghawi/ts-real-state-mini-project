import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import { ChildrenType } from "@/types/types";
import { authOptions } from "@/api/auth/[...nextauth]/route";

const Layout = async ({ children }: ChildrenType) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
