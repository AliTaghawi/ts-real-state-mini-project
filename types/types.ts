import { SafeUser } from "@/models/RSUser";
import { ChangeEvent, FocusEvent } from "react";

type ChildrenType = Readonly<{
  children: React.ReactNode;
}>;

type TextInputProps = {
  title: string;
  type: string;
  name: string;
  value: string | undefined;
  error: string | undefined;
  blur: boolean | undefined;
  placeholder?: string;
  textarea?: boolean;
  divClass?: string;
  changeHandler: (e: ChangeEvent<any>) => void;
  blurHandler: (e: FocusEvent<any>) => void;
};

type CheckBoxProps = {
  title: string;
  name: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  checked: boolean | undefined;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur?: (e: FocusEvent<any>) => void;
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
  CheckBoxProps,
  LoginType,
  RegisterType,
  FetchUserType,
  DetailsItemType,
  ChangePasswordType,
};
