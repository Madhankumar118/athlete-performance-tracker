import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/athletes">Athletes</NavLink>
      <NavLink to="/performance">Performance</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
