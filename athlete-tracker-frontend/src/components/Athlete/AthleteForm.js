import React, { useState, useEffect } from 'react';
import athleteService from '../../services/athleteService';

const AthleteForm = ({ athlete, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    sport: '',
  });

  useEffect(() => {
    if (athlete) {
      setFormData({
        fullName: athlete.fullName || '',
        age: athlete.age || '',
        sport: athlete.sport || '',
      });
    }
  }, [athlete]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (athlete && athlete.id) {
        // Update logic here when implemented
        // await athleteService.update(athlete.id, formData);
      } else {
        await athleteService.create(formData);
      }
      onClose();
    } catch (error) {
      alert('Failed to save athlete');
    }
  };

  return (
    <div className="modal">
      <h3>{athlete ? 'Edit Athlete' : 'Add Athlete'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          name="sport"
          value={formData.sport}
          onChange={handleChange}
          placeholder="Sport"
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose} className="btn-secondary">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AthleteForm;
