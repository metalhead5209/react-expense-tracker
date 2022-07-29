import React from "react";
import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>July 28th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$268.27</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
