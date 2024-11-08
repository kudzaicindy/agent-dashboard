import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaBuilding, FaUsers, FaTools, FaTasks, FaChartBar, FaCog, FaUserTie } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">PropertyManager</Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <FaHome /> Dashboard
          </Link>
          <Link to="/properties" className={location.pathname === '/properties' ? 'active' : ''}>
            <FaBuilding /> Properties
          </Link>
          <Link to="/tenants" className={location.pathname === '/tenants' ? 'active' : ''}>
            <FaUsers /> Tenants
          </Link>
          <Link to="/providers" className={location.pathname === '/providers' ? 'active' : ''}>
            <FaUserTie /> Providers
          </Link>
          <Link to="/maintenance" className={location.pathname === '/maintenance' ? 'active' : ''}>
            <FaTools /> Maintenance
          </Link>
          <Link to="/tasks" className={location.pathname === '/tasks' ? 'active' : ''}>
            <FaTasks /> Tasks
          </Link>
          <Link to="/reports" className={location.pathname === '/reports' ? 'active' : ''}>
            <FaChartBar /> Reports
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/settings" className={`settings-link ${location.pathname === '/settings' ? 'active' : ''}`}>
            <FaCog />
          </Link>
          <div className="user-profile">
            <img src="https://via.placeholder.com/32" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 