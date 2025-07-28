package com.example.athletetracker.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PerformanceDTO {
    private Long id;
    private Long athleteId;
    private String metricType;
    private Double value;
    private LocalDateTime timestamp;
}
