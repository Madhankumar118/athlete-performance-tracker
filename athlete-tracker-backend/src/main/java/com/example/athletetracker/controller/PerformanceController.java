package com.example.athletetracker.controller;

import com.example.athletetracker.dto.PerformanceDTO;
import com.example.athletetracker.service.PerformanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/performance")
@RequiredArgsConstructor
public class PerformanceController {

    private final PerformanceService performanceService;

    @GetMapping("/athlete/{athleteId}")
    public ResponseEntity<List<PerformanceDTO>> getPerformance(@PathVariable Long athleteId) {
        return ResponseEntity.ok(performanceService.getPerformanceByAthlete(athleteId));
    }

    @PostMapping
    public ResponseEntity<PerformanceDTO> addPerformance(@RequestBody @Valid PerformanceDTO dto) {
        PerformanceDTO created = performanceService.addPerformance(dto);
        return ResponseEntity.ok(created);
    }
}
