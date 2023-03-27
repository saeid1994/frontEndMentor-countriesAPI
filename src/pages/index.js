import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="bg-veryLightGrayLightModeBackground overflow-hidden px-3 h-64">
      <Search />
      <Filter />
    </div>
  );
}
