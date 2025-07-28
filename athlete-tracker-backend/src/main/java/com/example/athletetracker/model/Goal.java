package com.example.athletetracker.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="goals")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Goal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="athlete_id")
    private Athlete athlete;

    private String type;

    private Double target;

    private LocalDate deadline;

    private String status; // e.g., pending, achieved
}
