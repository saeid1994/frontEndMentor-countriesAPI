import { Fragment, useState } from "react";

export default function Search_Filter(props) {
  console.log(props.dataSlected);

  return (
    <Fragment>
      <form className=" mt-10 flex flex-col md:flex-row md:justify-between md:px-14 gap-y-8  md:gap-y-0">
        <input
          type="search"
          id="default-search"
          onChange={props.handleInput}
          className=" md:w-1/2 p-6 pl-10 text-sm text-gray-900 rounded-md shadow-lg  dark:placeholder-white dark:text-white dark:bg-darkModeElements  "
          placeholder="Search Mockups, Logos..."
          required
        />
        <div>
          dfd
          <i className="fa fa-search bg-red-500" aria-hidden="true"></i>
        </div>
        <select
          id="large"
          className=" w-1/2 md:w-1/5 px-4 py-3 shadow-md p-6 rounded-md h-16 dark:bg-darkModeElements "
          onChange={(e) => props.filterFun(e)}
          value={props.dataSlected}
        >
          <option selected value={0}>
            Filter by Region
          </option>
          <option value={1}>Africa</option>
          <option value={2}>America</option>
          <option value={3}>Asia</option>
          <option value={4}>Europe</option>
          <option value={5}>Oceania</option>
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
