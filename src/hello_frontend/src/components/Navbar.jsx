import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo"></div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/quizzes">View Quizzes</Link></li>
      <li><Link to="/add-quiz">Add Quiz</Link></li>
    </ul>
  </nav>
);

export default Navbar;
