package com.pratik.dto;

import java.time.LocalDate;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ExpenseResponseDTO {
    private long id;
    private String title;
    private double amount;
    private String category;
    private LocalDate date;
}
