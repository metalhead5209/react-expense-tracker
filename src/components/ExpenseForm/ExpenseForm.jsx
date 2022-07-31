import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [inputDate, setInputDate] = useState("");

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setInputDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate).toDateString()
    };

    console.log(expenseData);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={handleTitleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              onChange={handleAmountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
