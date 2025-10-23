package com.pratik.service;

import java.util.List;

import com.pratik.dto.ExpenseRequestDTO;
import com.pratik.dto.ExpenseResponseDTO;

public interface ExpenseService {
	
	public ExpenseResponseDTO addExpense(ExpenseRequestDTO expenseRequestDTO);
	
	public List<ExpenseResponseDTO> getAllExpenses();
	
	public ExpenseResponseDTO getExpenseById(long id );
	
	public ExpenseResponseDTO updateExpense(long id , ExpenseRequestDTO expenseRequestDTO);
	
	public void deleteExpense(long id);
	
	public List<ExpenseResponseDTO> getByCategory(String category); 
	
	public double getTotalAmount();

}
