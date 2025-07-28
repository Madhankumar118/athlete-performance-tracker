package com.example.athletetracker.service;

import com.example.athletetracker.dto.PerformanceDTO;
import com.example.athletetracker.exception.ResourceNotFoundException;
import com.example.athletetracker.model.Athlete;
import com.example.athletetracker.model.PerformanceMetric;
import com.example.athletetracker.repository.AthleteRepository;
import com.example.athletetracker.repository.PerformanceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PerformanceService {

    private final PerformanceRepository performanceRepository;
    private final AthleteRepository athleteRepository;

    public List<PerformanceDTO> getPerformanceByAthlete(Long athleteId) {
        return performanceRepository.findByAthleteId(athleteId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public PerformanceDTO addPerformance(PerformanceDTO dto) {
        Athlete athlete = athleteRepository.findById(dto.getAthleteId())
                .orElseThrow(() -> new ResourceNotFoundException("Athlete not found"));

        PerformanceMetric pm = PerformanceMetric.builder()
                .athlete(athlete)
                .metricType(dto.getMetricType())
                .value(dto.getValue())
                .timestamp(dto.getTimestamp())
                .build();

        PerformanceMetric saved = performanceRepository.save(pm);
        return convertToDTO(saved);
    }

    private PerformanceDTO convertToDTO(PerformanceMetric pm) {
        PerformanceDTO dto = new PerformanceDTO();
        dto.setId(pm.getId());
        dto.setAthleteId(pm.getAthlete().getId());
        dto.setMetricType(pm.getMetricType());
        dto.setValue(pm.getValue());
        dto.setTimestamp(pm.getTimestamp());
        return dto;
    }
}
