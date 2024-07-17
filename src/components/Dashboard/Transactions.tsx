import React from "react";
import Filter from "./Filter";

export default function Transactions() {
  const arr: number[] = new Array(20);
  return (
    <div className="transactions-table">
      <Filter />
      <div className="rowsCont">
        {arr.fill(1).map(() => {
          return <TableRow />;
        })}
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="tableRow">
      <span>Ali Mostafa</span>
      <span>Amount</span>
      <span>Date</span>
      <button className="btn btn-sm bg-red-600 hover:bg-red-800 text-white">
        <img
          className="h-3/5"
          src="./src/assets/images/DeleteUser.png"
          alt="delete user"
        />
      </button>
    </div>
  );
}
