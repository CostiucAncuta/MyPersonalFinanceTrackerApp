import React, { useState } from "react";
import styles from "../styles/ExpenseEntry.module.css";

const ExpenseEntry = ({ addExpenses }) => {
  const [expense, setExpenses] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenses((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.date && expense.category && expense.amount) {
      addExpenses({ ...expense, amount: parseFloat(expense.amount) });
      setExpenses({ date: "", category: "", description: "", amount: "" });
    }
  };
  return (
    <div className={styles["expense-list-container"]}>
      <h2>Expense List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={expense.date}
          onchange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={expense.description}
          onchange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (€)"
          value={expense.amount}
          onchange={handleInputChange}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseEntry;
