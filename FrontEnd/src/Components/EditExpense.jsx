import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditExpense() {
  //useParams is used to read parameters from the URL in a React Router route.
  const { id } = useParams();
  const navigate = useNavigate();

  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const [message ,setMessage] = useState("");

  useEffect (() => {
    const fetchExpense = async () =>{
        try{
            const response = await fetch(`http://localhost:8080/api/getexpensebyid/${id}`);
            if(!response.ok) throw new Error("Failed to fetch expense");
            const data = await response.json();
            setExpense(data);
        }catch(error){
            setMessage("❌ " + error.message);
        }
    }
    fetchExpense();
  },[id]);

    const handleChange = (e) => {
        setExpense({...expense,[e.target.name] : e.target.value})
    }
  const handleUpdate = async (e) => {
    e.preventDefault();

    try{
        const response  = await fetch(`http://localhost:8080/api/updateexpense/${id}`,{
            method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense),
        });
         if (!response.ok) throw new Error("Failed to update expense");

         setMessage("✅ Expense updated successfully!");
         setTimeout(() => navigate("/expenses"), 1000);
         
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  }


  return <div className="p-8 bg-gray-50 min-h-[calc(100vh-160px)]">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Edit Expense
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

      <form
        onSubmit={handleUpdate}
        className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Amount</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Category</label>
          <input
            type="text"
            name="category"
            value={expense.category}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Update Expense
        </button>
      </form>
    </div>
}

export default EditExpense;
