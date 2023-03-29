import { Fragment } from "react";
import { useTheme } from "next-themes";
// import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';

export default function Header(props): JSX.Element {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  // console.log(currentTheme);

  return (
    <Fragment>
      <section className="flex h-24 items-center justify-between px-3 shadow-lg  md:px-16 dark:bg-darkModeElements">
        <h2 className="text-lg font-bold ">Where in the world?</h2>
        <div
          className="flex"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          Dark Mode
        </div>
      </section>
      {props.children}
    </Fragment>
  );
}
