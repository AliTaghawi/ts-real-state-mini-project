type ChildrenType = Readonly<{
  children: React.ReactNode;
}>;

interface LoginType {
  email: string;
  password: string;
}

interface RegisterType extends LoginType {
  confirmPassword: string;
}

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

export type { ChildrenType, LoginType, RegisterType, TextInputProps };
