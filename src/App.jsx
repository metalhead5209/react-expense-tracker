import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMB_DATA = [
  {
    id: 7845,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 1545, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 214,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 9987,
    title: "Computer",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 2187,
    title: "Chair",
    amount: 50,
    date: new Date(2020, 5, 12),
  },
  {
    id: 4566,
    title: "Shoes",
    amount: 150,
    date: new Date(2020, 7, 12),
  },
];



const App = (props) => {
  const [expenses, setExpenses] = useState(DUMB_DATA, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
