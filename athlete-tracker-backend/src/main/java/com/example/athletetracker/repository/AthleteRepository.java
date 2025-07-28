package com.example.athletetracker.repository;

import com.example.athletetracker.model.Athlete;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AthleteRepository extends JpaRepository<Athlete, Long> {
    List<Athlete> findByUserId(Long userId);
}
