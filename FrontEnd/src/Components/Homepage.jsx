import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[calc(100vh-160px)] bg-gradient-to-br from-blue-50 to-blue-100 text-center px-6">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
        Track Your Expenses Effortlessly 💰
      </h2>
      <p className="text-gray-600 max-w-2xl text-lg mb-10">
        Stay organized and take control of your spending with this smart expense
        tracker integrated with your Spring Boot REST API.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/add-expense"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-200"
        >
          ➕ Add Expense
        </Link>
        <Link
          to="/expenses"
          className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-medium border border-blue-300 hover:bg-blue-50 shadow-sm transform hover:scale-105 transition duration-200"
        >
          📋 View Expenses
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
