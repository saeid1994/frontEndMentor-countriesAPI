const fs = require("fs/promises");
import path from "path";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Search from "@/components/Search";

function Home(props) {
  return (
    <div className="bg-veryLightGrayLightModeBackground overflow-hidden px-3 ">
      <Search />
      <Filter />
      <Card data={props.data} />
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
