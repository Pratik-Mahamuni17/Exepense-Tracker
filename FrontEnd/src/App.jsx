import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/Homepage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AddExpense from './Components/AddExpense'
import ExpenseList from './Components/ExpenseList'
import EditExpense from './Components/EditExpense'

function App() {

  return (

     <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* This grows to fill space between Navbar & Footer */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/add-expense"
            element={<AddExpense/>}
          />
          <Route
            path="/expenses"
            element={<ExpenseList/>}
          />
          <Route path="/edit-expense/:id" element={<EditExpense />} />
    
        </Routes>
      </div>

      <Footer />
    </div>
  

  )
}

export default App
