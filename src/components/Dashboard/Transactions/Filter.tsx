import React, { useState } from "react";

export default function Filter({
  sortByName,
  sortByAmount,
  sortByDate,
  handleSearch,
}: FilterProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e: Event | any) => {
    const value: string = e.target.value;
    setSearchInput(value);
    handleSearch(value);
  };

  return (
    <div className="filter mt-2 mb-2 me-4">
      <form className="flex justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={sortByDate}
            className="btn bg-brighter btn-sm font-[CairoL] font-light"
          >
            Recent
          </button>
          <button
            type="button"
            onClick={sortByName}
            className="btn bg-brighter btn-sm font-[CairoL] font-light"
          >
            Name
          </button>
          <button
            type="button"
            onClick={sortByAmount}
            className="btn bg-brighter btn-sm font-[CairoL] font-light"
          >
            Amount
          </button>
        </div>
        <input
          type="text"
          id="search"
          value={searchInput}
          onChange={handleInputChange}
          className="input bg-brighter input-sm w-full max-w-xs font-[CairoL]"
          name="search"
          placeholder="Search..."
        />
      </form>
    </div>
  );
}

type FilterProps = {
  sortByName: () => void;
  sortByAmount: () => void;
  sortByDate: () => void;
  handleSearch: (input: string) => void;
};
