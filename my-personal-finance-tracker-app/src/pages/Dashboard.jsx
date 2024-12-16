import React, { useEffect, useState } from "react";
import { ExpenseEntry, IncomeEntry } from "../pages";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    //mockups for now
    const mockExpenses = [
      { id: 1, category: "Groceries", amount: 50, date: "2024-11-15" },
      { id: 2, category: "Utilities", amount: 100, date: "2024-11-13" },
      { id: 3, category: "Subscriptions", amount: 30, date: "2024-11-13" },
    ];
    const mockIncome = [
      { id: 1, source: "Salary", amount: 2500, date: "2024-11-01" },
      { id: 2, source: "Freelance", amount: 1500, date: "2024-11-10" },
    ];

    //simulate data loading
    setExpenses(mockExpenses);
    setIncome(mockIncome);
  }, []);

  return (
    <div className={styles["dashboard-container"]}>
      <h1>Personal Finance Dashboard</h1>
      <div className={styles.summary}>
        <p>
          Total Income: €
          {income.reduce((sum, income) => sum + income.amount, 0)}
        </p>
        <p>
          Net Balance: €
          {income.reduce((sum, inc) => sum + inc.amount, 0) -
            expenses.reduce((sum, expense) => sum + expense.amount, 0)}
        </p>
        <p>
          Total Expenses: €
          {expenses.reduce((sum, expense) => sum + expense.amount, 0)}
        </p>
      </div>
      <ExpenseEntry expenses={expenses} />
      <IncomeEntry income={income} />
    </div>
  );
};

export default Dashboard;
