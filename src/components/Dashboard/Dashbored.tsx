import React from "react";
import PersonalInfo from "./PersonalInfo";
import Chart from "./Chart";
import Transactions from "./Transactions";
import TransactionsCard from "./TransactionsCard";

export default function Dashbored() {
  return (
    <div className="dashboard">
      <PersonalInfo />
      <div className="dashContainer">
        <Transactions />
        <div className="chartAndCard">
          <Chart />
          <TransactionsCard />
        </div>
      </div>
    </div>
  );
}
