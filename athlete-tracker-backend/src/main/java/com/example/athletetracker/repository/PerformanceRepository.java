package com.example.athletetracker.repository;

import com.example.athletetracker.model.PerformanceMetric;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerformanceRepository extends JpaRepository<PerformanceMetric, Long> {
    List<PerformanceMetric> findByAthleteId(Long athleteId);
}
