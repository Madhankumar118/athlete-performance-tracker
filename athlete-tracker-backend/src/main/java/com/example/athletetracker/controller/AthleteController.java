package com.example.athletetracker.controller;

import com.example.athletetracker.dto.AthleteDTO;
import com.example.athletetracker.service.AthleteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/athletes")
@RequiredArgsConstructor
public class AthleteController {

    private final AthleteService athleteService;

    @GetMapping
    public ResponseEntity<List<AthleteDTO>> getAll() {
        return ResponseEntity.ok(athleteService.getAllAthletes());
    }

    @PostMapping
    public ResponseEntity<AthleteDTO> create(@RequestBody @Valid AthleteDTO dto,
                            @AuthenticationPrincipal UserDetails userDetails) {
        AthleteDTO created = athleteService.createAthlete(dto, userDetails.getUsername());
        return ResponseEntity.ok(created);
    }
}
