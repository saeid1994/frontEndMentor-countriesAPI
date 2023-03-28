import Image from "next/image";
export default function countryId() {
  return (
    <section className="flex flex-col space-y-10  p-10 ">
      <div>Back</div>
      <div className="flex flex-col gap-y-4">
        <Image
          alt="ddd"
          src="https://flagcdn.com/w320/us.png"
          width={500}
          height={500}
          className=""
        />
        <h2 className="font-bold text-2xl mt-10">USA</h2>
        <span>
          <h2 className="inline-block text-xl mt-5 ">Native Name: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <span>
          <h2 className="inline-block text-xl ">Population: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <span>
          <h2 className="inline-block text-xl ">Region: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <span>
          <h2 className="inline-block text-xl ">Sub Region: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <span>
          <h2 className="inline-block text-xl ">Capital: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <span>
          <h2 className="inline-block text-xl mt-7">Top Level Domain: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <span>
          <h2 className="inline-block text-xl ">Currencies: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <span>
          <h2 className="inline-block text-xl ">Languages: </h2>
          <h3 className="inline-block font-thin text-lg ml-2">USA</h3>
        </span>
        <h2 className="text-xl mt-8">Border Countries: </h2>
        <div className="mt-3  flex justify-between space-x-2">
          <div className="w-1/3 shadow-md border text-center px-3 py-2 rounded-sm">
            France
          </div>
          <div className="w-1/3 shadow-md border text-center px-3 py-2 rounded-sm">
            France
          </div>
          <div className="w-1/3 shadow-md border text-center px-3 py-2 rounded-sm">
            France
          </div>
        </div>
      </div>
    </section>
  );
}
