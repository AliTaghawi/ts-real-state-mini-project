import { SafeUser } from "@/models/RSUser";
import { ChangeEvent, FocusEvent } from "react";

type ChildrenType = Readonly<{
  children: React.ReactNode;
}>;

type TextInputProps = {
  title: string;
  type: string;
  name: string;
  value: string;
  error: string | undefined;
  blur: boolean | undefined;
  placeholder?: string;
  textarea?: boolean;
  divClass?: string;
  changeHandler: (e: ChangeEvent<any>) => void;
  blurHandler: (e: FocusEvent<any>) => void;
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
  bioType?: boolean;
}

interface ChangePasswordType {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export type {
  ChildrenType,
  TextInputProps,
  LoginType,
  RegisterType,
  FetchUserType,
  DetailsItemType,
  ChangePasswordType,
};
