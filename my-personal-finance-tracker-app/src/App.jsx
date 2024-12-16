import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  ExpenseEntry,
  IncomeEntry,
  MonthlyReport,
  Settings,
} from "./pages";
import "./App.css";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expense-entry" element={<ExpenseEntry />} />
          <Route path="/income-entry" element={<IncomeEntry />} />
          <Route path="/monthly-report" element={<MonthlyReport />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
