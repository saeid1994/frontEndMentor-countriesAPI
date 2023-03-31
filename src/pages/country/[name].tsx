const fs = require("fs/promises");
import path from "path";
import Image from "next/image";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function countryId(props) {
  const [inputText, setInputText] = useState("");

  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  function handleClick(alpha3Code: number): void {
    router.push(`/country/${alpha3Code}`);
    // router.isFallback = false;
  }

 
  if (!props.data) {
    return (
      <Loading
        text="Please wait"
        color={`${currentTheme === "dark" ? "#000" : "#fff"}`}
        type="bars"
      />
    );
  }
  return (
    <section className="flex flex-col space-y-10  p-10 dark:bg-darkModeBackground ">
      <div>Back</div>
      <div className="flex flex-col gap-y-4">
        <Image
          alt={props.data.name}
          src={props.data.flags.png}
          width={500}
          height={500}
        />
        <h2 className="font-bold text-2xl mt-10">{props.data.name}</h2>
        <div className="flex flex-col gap-y-4  mt-5">
          <span>
            <h2 className="inline-block text-xl ">Native Name: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.nativeName}
            </h3>
          </span>
          <span>
            <h2 className="inline-block text-xl ">Population: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.population}
            </h3>
          </span>
          <span>
            <h2 className="inline-block text-xl ">Region: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.region}
            </h3>
          </span>
          <span>
            <h2 className="inline-block text-xl ">Sub Region: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.subregion}
            </h3>
          </span>
          <span>
            <h2 className="inline-block text-xl ">Capital: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.capital}
            </h3>
          </span>
        </div>
        <div className="flex flex-col gap-y-4 mt-7">
          <span>
            <h2 className="inline-block text-xl ">Top Level Domain: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.topLevelDomain}
            </h3>
          </span>
          <span>
            <h2 className="inline-block text-xl ">Currencies: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.currencies[0].name}
            </h3>
          </span>
          <span>
            <h2 className="inline-block text-xl ">Languages: </h2>
            <h3 className="inline-block font-thin text-lg ml-2">
              {props.data.languages[0].name}
            </h3>
          </span>
        </div>
        <h2 className="text-xl mt-8">Border Countries: </h2>
        <div className="mt-3  flex justify-between space-x-2">
          {props.data.borders?.map((i, index) => {
            if (index <= 2) {
              return (
                <div
                  key={index}
                  onClick={() => handleClick(i)}
                  className="w-1/3 shadow-md border text-center px-3 py-2 rounded-sm cursor-pointer dark:bg-darkModeElements dark:border-darkModeBackground"
                >
                  {i}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);
  data = data.slice(0, 5).map((i) => {
    return { params: { name: i.alpha3Code } };
  });

  return {
    paths: data,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);

  data = data.find((i) => i.alpha3Code == params.name);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
