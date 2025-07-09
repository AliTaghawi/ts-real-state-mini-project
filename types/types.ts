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

interface fetchUserType {
  loading: boolean;
  user: object | null;
  error: string | undefined;
}

export type {
  ChildrenType,
  TextInputProps,
  LoginType,
  RegisterType,
  fetchUserType,
};
