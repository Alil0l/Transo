import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  yAxis: [
    {
      label: "Total ($)",
    },
  ],
  width: 300,
  height: 550,
};

const valueFormatter = (value: number | null) => `${value}$`;

export default function TransactionsChart({ transactions }) {
  let transactionAmounts: number = 0;
  const transByDate: number[] = [];
  const uniqueDates: Set<string> = new Set();

  const dateAmountMap: { [date: string]: number } = {};

  transactions.forEach((transaction) => {
    uniqueDates.add(transaction.date);

    if (dateAmountMap[transaction.date]) {
      dateAmountMap[transaction.date] += transaction.amount;
    } else {
      dateAmountMap[transaction.date] = transaction.amount;
    }
  });

  uniqueDates.forEach((date) => {
    transByDate.push(dateAmountMap[date]);
    transactionAmounts += dateAmountMap[date];
  });

  return (
    <>
      <BarChart
        xAxis={[{ scaleType: "band", data: [...uniqueDates] }]}
        series={[{ data: [...transByDate], color: "#FFF", valueFormatter }]}
        {...chartSetting}
      />
      <div className="text-center bg-gre p-8 rounded-2xl text-brighter font-[CairoB] text-sm">
        <p>
          Total Transactions
          <br />
          <span className="text-2xl "> {transactionAmounts}</span>
        </p>
      </div>
    </>
  );
}
