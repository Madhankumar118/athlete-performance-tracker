import React from 'react';
import AthleteList from '../components/Athlete/AthleteList';
import AthleteForm from '../components/Athlete/AthleteForm';

const AthletePage = () => {
  return (
    <div className="page-container">
      <h2>🏃‍♂️ Athlete Management</h2>
      <p>Add and manage athletes in your system.</p>

      <div className="section">
        <h3>Add New Athlete</h3>
        <AthleteForm />
      </div>

      <div className="section">
        <h3>All Athletes</h3>
        <AthleteList />
      </div>
    </div>
  );
};

export default AthletePage;
