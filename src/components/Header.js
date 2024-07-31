import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  const location = useLocation();
  const getLinkClassName = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav>
      <Link to="/users" className={getLinkClassName('/users')}>User Data</Link> | 
      <Link to="/campaigns" className={getLinkClassName('/campaigns')}>Campaign Data</Link> | 
      <Link to="/merged" className={getLinkClassName('/merged')}>Merged Data</Link>
    </nav>
  );
}

export default Header;
