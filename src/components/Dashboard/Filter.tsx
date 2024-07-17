import React from "react";

export default function Filter() {
  return (
    <div className="filter mt-2 mb-2 me-4">
      <form className="flex justify-between">
        <div className="flex gap-2">
          <button className="btn  bg-brighter btn-sm font-[CairoL] font-light">
            All
          </button>
          <button className="btn  bg-brighter btn-sm font-[CairoL] font-light">
            Alphabit
          </button>
          <button className="btn   bg-brighter btn-sm font-[CairoL] font-light">
            Amount
          </button>
        </div>
        <input
          type="text"
          id="search"
          className="input bg-brighter input-sm w-full max-w-xs font-[CairoL]"
          name="search"
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
