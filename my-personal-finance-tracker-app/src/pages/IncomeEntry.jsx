import React, { useState } from "react";
import styles from "../styles/IncomeEntry.module.css";

const IncomeEntry = ({ addIncome }) => {
  const [income, setIncome] = useState({
    date: " ",
    source: " ",
    amount: " ",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncome((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (income.date && income.source && income.amount) {
      addIncome({ ...income, amount: parseFloat(income.amount) });
      setIncome({ date: "", source: "", amount: "" });
    }
  };

  return (
    <div className={styles["income-list-container"]}>
      <h2>Income List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={income.date}
          onchange={handleInputChange}
          required
        />
        <input
          type="number"
          name="source"
          placeholder="Source"
          value={income.source}
          onchange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (€)"
          value={income.amount}
          onchange={handleInputChange}
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeEntry;
