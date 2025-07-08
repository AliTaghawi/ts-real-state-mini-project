import RegisterPage from "@/templates/RegisterPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions)
  if (session) redirect("/")
  return <RegisterPage />;
}

export default page;
