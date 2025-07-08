type ChildrenType = Readonly<{
  children: React.ReactNode;
}>;

type TextInputProps = {
  title: string;
  type: string;
  name: string;
  value: string;
  error: string | null;
  placeholder?: string;
  changeHandler: () => void;
  blurHandler: () => void;
};

export type { ChildrenType, TextInputProps };
