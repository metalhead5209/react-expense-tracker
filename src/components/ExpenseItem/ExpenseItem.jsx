import React from "react";
import './ExpenseItem.css';

const ExpenseItem = () => {

  const expenseDate = new Date(2022, 6, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 298.63;

  return (
    <div className="expense-item">
      <div> {expenseDate.toDateString()} </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
