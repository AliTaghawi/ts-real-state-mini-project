import { ChildrenType } from "@/types/types";
import { ThemeProvider } from "next-themes";

const ModeProvider = ({ children }: ChildrenType) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ModeProvider;
