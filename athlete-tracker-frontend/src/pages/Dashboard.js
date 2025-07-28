import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.username || "Athlete"} 👋</h2>
      <p>Track and manage athlete performance efficiently.</p>

      <div className="stats">
        <div className="stat-box">
          <h3>12</h3>
          <p>Total Athletes</p>
        </div>
        <div className="stat-box">
          <h3>34</h3>
          <p>Performance Records</p>
        </div>
      </div>

      <div className="dashboard-links">
        <Link to="/athletes" className="dashboard-button">🏃‍♂️ Manage Athletes</Link>
        <Link to="/performance" className="dashboard-button">📈 View Performance</Link>
      </div>

      <button className="logout-button" onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
};

export default Dashboard;
