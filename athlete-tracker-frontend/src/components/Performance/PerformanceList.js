import React, { useEffect, useState } from 'react';
import performanceService from '../../services/performanceService';

const PerformanceList = ({ athleteId }) => {
  const [performanceList, setPerformanceList] = useState([]);

  useEffect(() => {
    if (athleteId) {
      fetchPerformance();
    }
  }, [athleteId]);

  const fetchPerformance = async () => {
    const data = await performanceService.getByAthlete(athleteId);
    setPerformanceList(data);
  };

  return (
    <div>
      <h3>Performance Metrics</h3>
      <ul>
        {performanceList.map(perf => (
          <li key={perf.id}>
            {perf.metricType}: {perf.value} ({new Date(perf.timestamp).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceList;
