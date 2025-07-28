package com.example.athletetracker.service;

import com.example.athletetracker.dto.AthleteDTO;
import com.example.athletetracker.exception.ResourceNotFoundException;
import com.example.athletetracker.model.Athlete;
import com.example.athletetracker.model.User;
import com.example.athletetracker.repository.AthleteRepository;
import com.example.athletetracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AthleteService {

    private final AthleteRepository athleteRepository;
    private final UserRepository userRepository;

    public List<AthleteDTO> getAllAthletes() {
        return athleteRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public AthleteDTO createAthlete(AthleteDTO dto, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Athlete athlete = Athlete.builder()
                .user(user)
                .fullName(dto.getFullName())
                .age(dto.getAge())
                .sport(dto.getSport())
                .build();

        Athlete saved = athleteRepository.save(athlete);
        return convertToDTO(saved);
    }

    private AthleteDTO convertToDTO(Athlete athlete) {
        AthleteDTO dto = new AthleteDTO();
        dto.setId(athlete.getId());
        dto.setFullName(athlete.getFullName());
        dto.setAge(athlete.getAge());
        dto.setSport(athlete.getSport());
        return dto;
    }
}
