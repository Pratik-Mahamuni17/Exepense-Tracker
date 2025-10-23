package com.pratik.mapper;

import com.pratik.dto.ExpenseRequestDTO;
import com.pratik.dto.ExpenseResponseDTO;
import com.pratik.entities.Expense;

public class ExpenseMapper {
	
	
	 public static Expense toEntity(ExpenseRequestDTO dto) {
	        Expense expense = new Expense();
	        expense.setTitle(dto.getTitle());
	        expense.setAmount(dto.getAmount());
	        expense.setCategory(dto.getCategory());
	        expense.setDate(dto.getDate());
	        return expense;
	    }

	    public static ExpenseResponseDTO toDTO(Expense entity) {
	        ExpenseResponseDTO dto = new ExpenseResponseDTO();
	        dto.setId(entity.getId());
	        dto.setTitle(entity.getTitle());
	        dto.setAmount(entity.getAmount());
	        dto.setCategory(entity.getCategory());
	        dto.setDate(entity.getDate());
	        return dto;
	    }

}
