import { Fragment } from "react";
// import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';

export default function Header(props) {
  return (
    <Fragment>
      <section className="flex h-24 items-center justify-between px-3 shadow-lg mb-3 md:px-16">
        <h2 className="text-lg font-bold ">Where in the world?</h2>
        <div className="flex">
            Dark Mode
        </div>
      </section>
      {props.children}
    </Fragment>
  );
}
