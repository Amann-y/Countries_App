import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  const orderHandler = (val) => {
    const sortedCountries = [...countries].sort((a, b) => {
      return val === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });

    setCountries(sortedCountries)
  };

  return (
    <div className="text-white container mx-auto mt-2 flex justify-between items-center flex-wrap px-2 gap-2">
      <div>
        <input
          id="country-search"
          type="text"
          placeholder="Search Country"
          className="rounded-full p-1 outline-none border bg-transparent shadow-md px-2"
          value={search}
          onChange={handleChange}
        />
      </div>

      <div>
        <button
          onClick={() => orderHandler("asc")}
          className="bg-violet-400 px-2 py-1 rounded-md hover:bg-violet-600"
        >
          Ascending
        </button>
      </div>

      <div>
        <button
          onClick={() => orderHandler("des")}
          className="bg-rose-400 px-2 py-1 rounded-md hover:bg-rose-600"
        >
          Desending
        </button>
      </div>

      <div>
        <select
          className="rounded-full py-1 px-3 outline-none border bg-transparent shadow-md "
          value={filter}
          onChange={handleSelectChange}
        >
          <option className="bg-black text-white rounded-md" value="all">
            All
          </option>
          <option className="bg-black text-white rounded-md" value="Asia">
            Asia
          </option>
          <option className="bg-black text-white rounded-md" value="Africa">
            Africa
          </option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
