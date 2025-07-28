import React, { useState } from 'react';
import performanceService from '../../services/performanceService';

const PerformanceForm = ({ athleteId, onClose }) => {
  const [formData, setFormData] = useState({
    metricType: '',
    value: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!athleteId) return alert('Select an athlete first');
    try {
      await performanceService.add({
        athleteId,
        metricType: formData.metricType,
        value: parseFloat(formData.value),
        timestamp: new Date().toISOString(),
      });
      onClose();
    } catch (error) {
      alert('Failed to save performance data');
    }
  };

  return (
    <div className="modal">
      <h3>Add Performance Data</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="metricType"
          placeholder="Metric Type (e.g., speed)"
          value={formData.metricType}
          onChange={handleChange}
          required
        />
        <input
          name="value"
          type="number"
          step="any"
          placeholder="Value"
          value={formData.value}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
      </form>
    </div>
  );
};

export default PerformanceForm;
