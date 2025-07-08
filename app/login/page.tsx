import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import LoginPage from "@/templates/LoginPage";

async function Login() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <LoginPage />;
}

export default Login;
