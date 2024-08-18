import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const Darkmode = () => {
  const themeStorage = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";
  const [theme, setTheme] = useState(themeStorage);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element.classList]);

  return (
    <div>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => setTheme("light")}
          className="text-3xl cursor-pointer"
        />
      ) : (
        <BiSolidMoon
          onClick={() => setTheme("dark")}
          className="text-3xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Darkmode;
