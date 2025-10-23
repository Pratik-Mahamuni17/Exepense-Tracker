package com.pratik.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pratik.entities.Expense;

@Repository
public interface ExpenseRepositories extends JpaRepository<Expense, Long>{
		
	List<Expense> findByCategory(String category); 
	
}
