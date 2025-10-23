package com.pratik.dto;

import java.time.LocalDate;
import jakarta.validation.constraints.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ExpenseRequestDTO {

    @NotBlank(message = "title is required")
    private String title;

    @Positive(message = "Amount must be greater than zero")
    private double amount;

    @NotBlank(message = "category is required")
    private String category;

    @NotNull(message = "date cannot be null")
    private LocalDate date;
}
