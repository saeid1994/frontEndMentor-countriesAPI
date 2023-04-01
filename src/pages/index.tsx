const fs = require("fs/promises");
import path from "path";
import Card from "../components/Card";
import Search_Filter from "../components/Search_Filter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Home(props): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState(props.data);
  const [inputText, setInputText] = useState("");
  const [filterInput, setFiutlterInput] = useState(0);

  function handleClick(alpha3Code): void {
    // router.push();
    router.push(`/country/${alpha3Code}`);
  }

  let inputHandler = (e): void => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  function handleFilter(region): void {
    setFiutlterInput(region.target.value);

    if (region.target.value == 1) {
      return setData(props.data.filter((i) => i.region.match("Africa")));
    }
    if (region.target.value == 2) {
      return setData(props.data.filter((i) => i.region.match("America")));
    }
    if (region.target.value == 3) {
      return setData(props.data.filter((i) => i.region.match("Asia")));
    }
    if (region.target.value == 4) {
      return setData(props.data.filter((i) => i.region.match("Europe")));
    }
    if (region.target.value == 5) {
      return setData(props.data.filter((i) => i.region.match("Oceania")));
    } else {
      setData(props.data);
    }

    setFiutlterInput(region.target.value);
  }

  useEffect(() => {
    setData(props.data.filter((i) => i.name.toUpperCase().match(inputText)));

    if (inputText === "") {
      setData(props.data);
    } else {
      setData(
        props.data.filter((i) =>
          i.name.toUpperCase().match(inputText.toUpperCase())
        )
      );
    }
  }, [inputText]);

  if (!data.length) {
    return (
      <div className="dark:bg-darkModeBackground bg-veryLightGrayLightModeBackground h-screen overflow-hidden">
        <Search_Filter
          filterFun={handleFilter}
          handleInput={inputHandler}
          dataSlected={filterInput}
        />
        <Card data={data} handleClick={handleClick} />
        <h2 className="text-center">not found ...</h2>
      </div>
    );
  }
  return (
    <div className="dark:bg-darkModeBackground bg-veryLightGrayLightModeBackground overflow-hidden px-3 ">
      <Search_Filter
        filterFun={handleFilter}
        handleInput={inputHandler}
        dataSlected={filterInput}
      />
      <Card data={data} handleClick={handleClick} />
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
