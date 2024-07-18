import React, { useEffect, useState } from "react";
import Filter from "./Transactions/Filter";
import TableRow from "./Transactions/Tablerow";
import TransactionsChart from "./TransactionsChart";

export default function Transactions() {
  // using setState to handle the data displaying
  const [data, setData] = useState<Data | null>(null);
  // Adding filters
  const [filteredData, setFilteredData] = useState<Transaction[]>([]);

  // using useEffect to handle data coming from outside of react after the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await fetch(
          "https://api.jsonbin.io/v3/b/66993e94ad19ca34f88972f6",
          {
            headers: {
              "X-Master-Key":
                "$2a$10$mQkri.Gx/tl4ZsXWrSyJ5.sK3HTLgW3f3Xau/TRCXqc5R6adSx0F2",
            },
          }
        );
        const transactionsResponse = await fetch(
          "https://api.jsonbin.io/v3/b/66993e9ead19ca34f88972fc",
          {
            headers: {
              "X-Master-Key":
                "$2a$10$mQkri.Gx/tl4ZsXWrSyJ5.sK3HTLgW3f3Xau/TRCXqc5R6adSx0F2",
            },
          }
        );
        // checking response :P
        if (!customersResponse.ok || !transactionsResponse.ok) {
          throw new Error("The error from the backend, my code is perfect.");
        }

        // parsing the data
        const cust: Customer[] = await customersResponse.json();
        const trans: Transaction[] = await transactionsResponse.json();

        const customers: Customer[] = await cust.record.customers;
        const transactions: Transaction[] = await trans.record.transactions;

        // setting the data
        setData({
          customers,
          transactions,
        });
        // setting the intial filter data
        setFilteredData(transactions);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // filtering.
  const sortByDate = () => {
    if (data) {
      const sorted = [...filteredData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setFilteredData(sorted);
    }
  };
  const sortByName = () => {
    if (data) {
      const sorted = [...filteredData].sort((a, b) => {
        const customerA = data.customers.find((c) => c.id == a.customer_id);
        const customerB = data.customers.find((c) => c.id == b.customer_id);
        return customerA!.name.localeCompare(customerB!.name);
      });
      setFilteredData(sorted);
    }
  };
  const sortByAmount = () => {
    if (data) {
      const sorted = [...filteredData].sort((a, b) => b.amount - a.amount);
      console.log(sorted);
      setFilteredData(sorted);
    }
  };
  // Searching..
  const handleSearch = (input: string) => {
    if (!data) return;
    const lowerInput = input.toLowerCase();
    const matchingCustomers = data.customers.filter((customer) =>
      customer.name.toLowerCase().includes(lowerInput)
    );
    const filtered = data.transactions.filter((item) =>
      matchingCustomers.some((customer) => customer.id == item.customer_id)
    );
    setFilteredData(filtered);
  };

  const handleDelete = (id: number) => {
    const updatedTransactions = filteredData.filter(
      (transaction) => transaction.id != id
    );
    setFilteredData(updatedTransactions);
  };

  // Adding loader to wait for the data.
  if (!data) {
    return <div>Loading...</div>;
  }
  4;
  // passing the data
  return (
    <>
      <div className="transactions-table">
        <Filter
          handleSearch={handleSearch}
          sortByName={sortByName}
          sortByAmount={sortByAmount}
          sortByDate={sortByDate}
        />
        <div className="rowsCont">
          <TableRow
            transactions={filteredData}
            handleDelete={handleDelete}
            customers={data.customers}
          />
        </div>
      </div>
      <div className="chartAndCard">
        <TransactionsChart transactions={filteredData} />
      </div>
    </>
  );
}

// Typescript types
type Customer = {
  id: number;
  name: string;
};
type Transaction = {
  id: number;
  customer_id: number;
  date: string;
  amount: number;
};
type Data = {
  customers: Customer[];
  transactions: Transaction[];
};
