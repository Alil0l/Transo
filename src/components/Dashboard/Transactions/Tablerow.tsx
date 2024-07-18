import React from "react";

export default function TableRow({
  transactions,
  customers,
  handleDelete,
}: TableRowProps) {
  return (
    <>
      {transactions.map((transaction) => {
        // checking if the customer id exist then conditionaly renders it.
        const customer = customers.find((c) => c.id == transaction.customer_id);
        return (
          <div className="tableRow" key={transaction.id}>
            <span>{customer ? customer.name : "Unknown"}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.date}</span>
            <button
              onClick={() => handleDelete(transaction.id)}
              className="btn btn-sm bg-red-600 hover:bg-red-800 text-white"
            >
              <img
                className="h-3/5"
                src="./src/assets/images/DeleteUser.png"
                alt="delete user"
              />
            </button>
          </div>
        );
      })}
    </>
  );
}

// Typescript Types
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

type TableRowProps = {
  transactions: Transaction[];
  customers: Customer[];
};
