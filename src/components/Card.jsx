import Image from "next/image";

export default function Card(props) {
  return (
    <section className="flex flex-col p-14 gap-10 md:grid grid-cols-4 md:gap-16">
      {props.data.map((i, index) => {
        return (
          <div
            className="shadow-md bg-white rounded-md h-[27rem] flex flex-col"
            key={index}
          >
            <Image
              alt={i.name}
              src={i.flags?.png}
              width={500}
              height={500}
              className="h-1/2 rounded-t-md"
            />
            <h2 className="text-xl m-6 font-bold">{i.name}</h2>
            <span className="mx-6">
              <h2 className="inline-block text-xl">Population: </h2>
              <h3 className="inline-block font-thin text-lg ml-2">
                {" "}
                {i.population}
              </h3>
            </span>
            <span className="mx-6">
              <h2 className="inline-block text-xl">Region: </h2>
              <h3 className="inline-block font-thin text-lg ml-2">
                {" "}
                {i.region}
              </h3>
            </span>
            <span className="mx-6">
              <h2 className="inline-block text-xl">Capital: </h2>
              <h3 className="inline-block font-thin text-lg ml-2">
                {" "}
                {i.capital}
              </h3>
            </span>
          </div>
        );
      })}
    </section>
  );
}
