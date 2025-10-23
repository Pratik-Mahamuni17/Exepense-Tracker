import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Fetch all expenses from backend
  const fetchExpenses = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/getallexpenses");
      if (!response.ok) throw new Error("Failed to fetch expenses");
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error(error);
      setMessage("❌ " + error.message);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Delete expense
  const deleteExpense = async (id) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) return;

    try {
      const response = await fetch(`http://localhost:8080/api/deleteexpense/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete expense");

      setMessage("✅ Expense deleted successfully!");
      setExpenses(expenses.filter((exp) => exp.id !== id));
    } catch (error) {
      console.error(error);
      setMessage("❌ " + error.message);
    }
  };

  const handleEdit = (expense) => {
    navigate(`/edit-expense/${expense.id}`);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-[calc(100vh-160px)]">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        All Expenses
      </h2>

      {message && (
        <p
          className={`text-center mb-4 font-medium ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      {expenses.length === 0 ? (
        <p className="text-center text-gray-600">No expenses found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp) => (
                <tr key={exp.id} className="text-center border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{exp.title}</td>
                  <td className="py-2 px-4">₹{exp.amount}</td>
                  <td className="py-2 px-4">{exp.category}</td>
                  <td className="py-2 px-4">{exp.date}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleEdit(exp)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteExpense(exp.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-200 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
