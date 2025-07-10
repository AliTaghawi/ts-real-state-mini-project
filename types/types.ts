import { SafeUser } from "@/models/RSUser";

type ChildrenType = Readonly<{
  children: React.ReactNode;
}>;

type TextInputProps = {
  title: string;
  type: string;
  name: string;
  value: string;
  error: string | null;
  blur: boolean | null;
  placeholder?: string;
  changeHandler: () => void;
  blurHandler: () => void;
};

interface LoginType {
  email: string;
  password: string;
}

interface RegisterType extends LoginType {
  confirmPassword: string;
}

interface FetchUserType {
  loading: boolean;
  user: SafeUser | null;
  error: string | undefined;
}

interface DetailsItemType {
  title: string;
  property: string | null | undefined;
  bioType?: boolean
}

export type {
  ChildrenType,
  TextInputProps,
  LoginType,
  RegisterType,
  FetchUserType,
  DetailsItemType,
};
