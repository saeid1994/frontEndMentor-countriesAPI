

export default function Filter(props) {
  return (
    <form>
      <select
        id="large"
        class=" w-1/2 px-4 py-3 shadow-md p-6 mt-10 rounded-md h-16 "
      >
        <option selected>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}
