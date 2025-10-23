import React, { useState } from "react";

function AddExpense() {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("http://localhost:8080/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add Expense");
      }
      setMessage("✅ Expense added successfully!");
      setExpense({ title: "", amount: "", category: "", date: "" });
    } catch (error) {
      console.error(error);
      setMessage("❌ " + error.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Add New Expense
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={expense.title}
              onChange={handleChange}
              placeholder="Enter expense title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={expense.category}
              onChange={handleChange}
              placeholder="Enter category"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={expense.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Add Expense
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`text-center mt-4 font-medium ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default AddExpense;
