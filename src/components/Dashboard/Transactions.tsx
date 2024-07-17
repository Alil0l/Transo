import React from "react";
import Filter from "./Filter";

export default function Transactions() {
  return (
    <div className="transactions-table overflow-y-auto">
      <Filter />
      <div>
        <TableRow />
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div>
      <span className="">Ali Mostafa</span>
      <span>Amount</span>
      <span>Date</span>
      <button className="btn "></button>
    </div>
  );
}
