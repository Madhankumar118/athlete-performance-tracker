import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { token, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/">Dashboard</Link>
        {token && (
          <>
            <Link to="/athletes">Athletes</Link>
            <Link to="/performance">Performance</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
