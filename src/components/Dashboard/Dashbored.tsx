import React from "react";
import PersonalInfo from "./PersonalInfo";
import Transactions from "./Transactions";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Dashbored() {
  return (
    <div className="dashboard">
      <PersonalInfo />
      <div className="dashContainer">
        <Transactions />
        <div className="chartAndCard">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={300}
            height={200}
          />{" "}
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
