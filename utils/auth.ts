import { compare, hash } from "bcryptjs";

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword: string = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const result: boolean = await compare(password, hashedPassword);
  return result;
};

export { hashPassword, verifyPassword };
