package com.pratik.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pratik.dto.ExpenseRequestDTO;
import com.pratik.dto.ExpenseResponseDTO;
import com.pratik.service.ExpenseServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173") 
public class ExpenseController {

	@Autowired
	private ExpenseServiceImpl expenseService;

	@PostMapping("/api/expenses")
	public ResponseEntity<ExpenseResponseDTO> addExpense(@Valid @RequestBody ExpenseRequestDTO expenseRequestDTO) {
		ExpenseResponseDTO responseDto = expenseService.addExpense(expenseRequestDTO);
		return ResponseEntity.ok(responseDto);
	}
	@GetMapping("/api/getallexpenses")
	public ResponseEntity<List<ExpenseResponseDTO>> getAllExpenses() {
		return ResponseEntity.ok(expenseService.getAllExpenses());
	}
	
	@GetMapping("/api/getexpensebyid/{id}")
	public ResponseEntity<ExpenseResponseDTO> getExpenseById(@PathVariable long id) {
		return ResponseEntity.ok(expenseService.getExpenseById(id));
	}
	
	@PutMapping("/api/updateexpense/{id}")
	public ResponseEntity<ExpenseResponseDTO> updateExpense(@PathVariable long id,@Valid @RequestBody ExpenseRequestDTO expenseRequestDTO ) {
		return ResponseEntity.ok(expenseService.updateExpense(id, expenseRequestDTO));
	}
	
	@DeleteMapping("/api/deleteexpense/{id}")
	public ResponseEntity<String> deleteExpense(@PathVariable long id) {
		expenseService.deleteExpense(id);
		return ResponseEntity.ok("Expense deleted successfully with ID: " + id);
	}
	
	@GetMapping("/api/category")
	public ResponseEntity<List<ExpenseResponseDTO>> getExpenseByCategory(@RequestParam String category) {
		List<ExpenseResponseDTO> expenses = expenseService.getByCategory(category);
	    return ResponseEntity.ok(expenses);
	}
	
	
	@GetMapping("/api/total")
	public ResponseEntity<Double> getTotalAmount() {
		return ResponseEntity.ok(expenseService.getTotalAmount());
	}
	

}
