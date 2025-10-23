import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-3 py-2 rounded-md transition duration-200 ${
      location.pathname === path
        ? "bg-white text-blue-600 font-semibold"
        : "hover:bg-blue-500 hover:text-white"
    }`;

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">
          💸 Expense Tracker
        </h1>
        <div className="space-x-4">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/add-expense" className={linkClasses("/add-expense")}>Add Expense</Link>
          <Link to="/expenses" className={linkClasses("/expenses")}>View Expenses</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
