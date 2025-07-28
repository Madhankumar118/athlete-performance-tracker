import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import AthletePage from './pages/AthletePage';
import PerformancePage from './pages/PerformancePage';
import NotFoundPage from './pages/NotFoundPage';

import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/athletes" element={<AthletePage />} />
            <Route path="/performance" element={<PerformancePage />} />
          </Route>

          {/* Redirect "/" to register or dashboard */}
          <Route path="/" element={<RegisterPage />} />

          {/* Not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
