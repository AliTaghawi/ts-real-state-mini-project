const setTheme = () => {
  const storedTheme = localStorage.getItem("theme") || "system";

  const PCSMedia = window.matchMedia("(prefers-color-scheme: dark)");

  // let theme = "";

  if (storedTheme === "system") {
    // theme = PCSMedia.matches ? "dark" : "";
    if (PCSMedia.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } else {
    // theme = storedTheme === "dark" ? "dark" : "";
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  // console. log("theme is set");
  // return theme;
};

const changeTheme = (theme: string) => {
  if (theme === "system") {
    localStorage.removeItem("theme")
  } else {
    localStorage.setItem("theme", theme);
  }
  setTheme();
};

const loadMode = () => {
  const storedTheme = localStorage.getItem("theme") || "system";
  console.log(storedTheme)
  return storedTheme
}

export { setTheme, changeTheme, loadMode };