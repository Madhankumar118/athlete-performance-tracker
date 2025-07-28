import React from 'react';

const AthleteDetail = ({ athlete }) => {
  if (!athlete) return null;

  return (
    <div className="athlete-detail">
      <h3>Athlete Details</h3>
      <p><strong>Name:</strong> {athlete.fullName}</p>
      <p><strong>Age:</strong> {athlete.age}</p>
      <p><strong>Sport:</strong> {athlete.sport}</p>
    </div>
  );
};

export default AthleteDetail;
