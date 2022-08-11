import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [editing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10000).toString(),
    };
    props.onAddExpense(expenseData);
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!setIsEditing && <button onClick={editHandler}>Add New Expense</button>}
      {setIsEditing && 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      }
    </div>
  );
};

export default NewExpense;
