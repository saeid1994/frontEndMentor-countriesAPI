import { Fragment } from "react";

export default function Search_Filter(props) {
  return (
    <Fragment>
      <form className=" mt-10 flex flex-col md:flex-row md:justify-between md:px-14 gap-y-8  md:gap-y-0">
        <input
          type="search"
          id="default-search"
          className=" md:w-1/2 p-6 pl-10 text-sm text-gray-900 rounded-md shadow-lg  dark:placeholder-white dark:text-white dark:bg-darkModeElements  "
          placeholder="Search Mockups, Logos..."
          required
        />
        <select
          id="large"
          className=" w-1/2 md:w-1/5 px-4 py-3 shadow-md p-6 rounded-md h-16 dark:bg-darkModeElements "
          onChange={(e) => props.filterFun(e)}
        >
          <option selected>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
      </form>
    </Fragment>
  );
}
