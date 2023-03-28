const fs = require("fs/promises");
import path from "path";
import Card from "@/components/Card";
import Search_Filter from "@/components/Search_Filter";
import { useState } from "react";

function Home(props) {
  const [data, setData] = useState(props.data);
  function handleFilter(region) {
    console.log(region.target);
    console.log(data);
  }
  return (
    <div className="bg-veryLightGrayLightModeBackground overflow-hidden px-3 ">
      <Search_Filter filterFun={handleFilter} />
      <Card data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      data,
    },
  };
}
export default Home;
