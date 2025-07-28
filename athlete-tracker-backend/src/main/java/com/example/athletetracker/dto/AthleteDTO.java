package com.example.athletetracker.dto;

import lombok.Data;

@Data
public class AthleteDTO {
    private Long id;
    private String fullName;
    private Integer age;
    private String sport;
}
