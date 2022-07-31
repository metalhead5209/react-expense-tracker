import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [ title, setTitle] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ date, setDate ] = useState('');

    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };

    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };

    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={handleTitleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min='0.01' step='0.01S' onChange={handleAmountChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="date" min='2019-01-01' max='2022-12-31' onChange={handleDateChange} />
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