import React, { useEffect, useState } from 'react';
import athleteService from '../../services/athleteService';
import AthleteDetail from './AthleteDetail';
import AthleteForm from './AthleteForm';

const AthleteList = () => {
  const [athletes, setAthletes] = useState([]);
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchAthletes();
  }, []);

  const fetchAthletes = async () => {
    const data = await athleteService.getAll();
    setAthletes(data);
  };

  const handleAddClick = () => {
    setSelectedAthlete(null);
    setShowForm(true);
  };

  const handleEditClick = athlete => {
    setSelectedAthlete(athlete);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    fetchAthletes();
  };

  return (
    <div>
      <h2>Athletes</h2>
      <button onClick={handleAddClick}>Add Athlete</button>

      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id} onClick={() => handleEditClick(athlete)}>
            {athlete.fullName} - {athlete.sport}
          </li>
        ))}
      </ul>

      {showForm && <AthleteForm athlete={selectedAthlete} onClose={handleFormClose} />}

      {selectedAthlete && !showForm && <AthleteDetail athlete={selectedAthlete} />}
    </div>
  );
};

export default AthleteList;
