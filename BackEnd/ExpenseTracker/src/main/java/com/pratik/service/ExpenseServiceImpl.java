package com.pratik.service;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratik.dto.ExpenseRequestDTO;
import com.pratik.dto.ExpenseResponseDTO;
import com.pratik.entities.Expense;
import com.pratik.exception.ExpenseNotFoundException;
import com.pratik.mapper.ExpenseMapper;
import com.pratik.repositories.ExpenseRepositories;

@Service
public class ExpenseServiceImpl implements ExpenseService {

	@Autowired
	private ExpenseRepositories expenseRepository;

	@Override
	public ExpenseResponseDTO addExpense(ExpenseRequestDTO expenseRequestDTO) {

		Expense expense = ExpenseMapper.toEntity(expenseRequestDTO);

		Expense saved = expenseRepository.save(expense);

		return ExpenseMapper.toDTO(saved);
	}

	@Override
	public List<ExpenseResponseDTO> getAllExpenses() {
		return expenseRepository.findAll()
				 .stream()
				 .map(ExpenseMapper :: toDTO)
				 .collect(Collectors.toList());
				
	}

	@Override
	public ExpenseResponseDTO getExpenseById(long id) {
		 Expense expense = expenseRepository.findById(id)
				.orElseThrow(() -> new ExpenseNotFoundException("Expense not found with ID: " + id));
		return ExpenseMapper.toDTO(expense);
				
	}

	@Override
	public ExpenseResponseDTO updateExpense(long id, ExpenseRequestDTO expenseRequestDTO) {
		Expense existingExpense = expenseRepository.findById(id)
				.orElseThrow(() -> new ExpenseNotFoundException("Expense not found with ID: " + id));
		
		existingExpense.setTitle(expenseRequestDTO.getTitle());
		existingExpense.setAmount(expenseRequestDTO.getAmount());
		existingExpense.setCategory(expenseRequestDTO.getCategory());
		existingExpense.setDate(expenseRequestDTO.getDate());
		
		Expense updatedExpense = expenseRepository.save(existingExpense);
		
		
		return ExpenseMapper.toDTO(updatedExpense);
	}

	@Override
	public void deleteExpense(long id) {
		Expense existingExpense = expenseRepository.findById(id)
	            .orElseThrow(() -> new ExpenseNotFoundException("Expense not found with ID: " + id));
		expenseRepository.delete(existingExpense);
	}

	@Override
	public List<ExpenseResponseDTO> getByCategory(String category) {
		List<Expense> expenses = expenseRepository.findByCategory(category);
		
		if(expenses.isEmpty()) {
			throw new ExpenseNotFoundException("No expenses found for category: " + category);
		}
		
		return expenses.stream()
				.map(ExpenseMapper ::toDTO)
				.collect(Collectors.toList());
	}

	@Override
	public double getTotalAmount() {
		
		List<Expense> expenses = expenseRepository.findAll();
		
		if(expenses.isEmpty()) {
			return 0.0;
		}
		
		double total = expenses.stream()
								.mapToDouble(Expense :: getAmount)
								.sum();
		return total;
	}

	
}
