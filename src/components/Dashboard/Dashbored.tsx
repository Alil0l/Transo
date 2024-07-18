import React from "react";
import PersonalInfo from "./PersonalInfo";
import Transactions from "./Transactions";

export default function Dashbored() {
  return (
    <div className="dashboard">
      <PersonalInfo />
      <div className="dashContainer">
        <Transactions />
      </div>
    </div>
  );
}
