import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerformanceList from '../components/Performance/PerformanceList';
import PerformanceForm from '../components/Performance/PerformanceForm';

const PerformancePage = () => {
  const [athletes, setAthletes] = useState([]);
  const [selectedAthleteId, setSelectedAthleteId] = useState('');
  const [showForm, setShowForm] = useState(false);

  // 🔄 Fetch athletes from backend on mount
  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const res = await axios.get('/api/athletes');
        setAthletes(res.data);
      } catch (err) {
        console.error('Error fetching athletes:', err);
      }
    };
    fetchAthletes();
  }, []);

  const handleAddClick = () => {
    if (!selectedAthleteId) {
      alert('Please select an athlete first');
      return;
    }
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className="page-container">
      <h2>📈 Performance Tracker</h2>

      <div className="section">
        <label htmlFor="athleteSelect">Select Athlete:</label>
        <select
          id="athleteSelect"
          value={selectedAthleteId}
          onChange={(e) => setSelectedAthleteId(e.target.value)}
        >
          <option value="">-- Select --</option>
          {athletes.map((athlete) => (
            <option key={athlete.id} value={athlete.id}>
              {athlete.name || athlete.username || `Athlete #${athlete.id}`}
            </option>
          ))}
        </select>

        <button onClick={handleAddClick} style={{ marginLeft: '10px' }}>
          ➕ Add Performance
        </button>
      </div>

      {showForm && (
        <div className="section">
          <PerformanceForm athleteId={selectedAthleteId} onClose={handleFormClose} />
        </div>
      )}

      <div className="section">
        <PerformanceList athleteId={selectedAthleteId} />
      </div>
    </div>
  );
};

export default PerformancePage;
