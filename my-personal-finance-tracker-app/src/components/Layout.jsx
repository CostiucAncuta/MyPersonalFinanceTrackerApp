import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const location = useLocation(); // Helps track the current route
  return (
    <div>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.link} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          📋Dashboard
        </Link>

        <Link
          to="/expense-entry"
          className={`${styles.link} ${
            location.pathname === "/expense-entry" ? styles.active : ""
          }`}
        >
          📝Expense Entry
        </Link>

        <Link
          to="/income-entry"
          className={`${styles.link} ${
            location.pathname === "/income-entry" ? styles.active : ""
          }`}
        >
          🗒️Income Entry
        </Link>

        <Link
          to="/monthly-report"
          className={`${styles.link} ${
            location.pathname === "/monthly-report" ? styles.active : ""
          }`}
        >
          📊Monthly Report
        </Link>
        <Link
          to="/settings"
          className={`${styles.link} ${
            location.pathname === "/settings" ? styles.active : ""
          }`}
        >
          ⚙️Settings
        </Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
