import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData.username, formData.password);
      setSuccess('Registration successful! You may login now.');
      setError('');
      setFormData({ username: '', password: '' });
    } catch (err) {
      setError(err.response?.data || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate('/login')} className="link-button">Go to Login</button>
    </div>
  );
};

export default Register;
