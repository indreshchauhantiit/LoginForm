import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">EXAMBUDDY</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="#">Contact</a>
        <a href="login">Login</a>
        <a href="contact">Exam</a>
      </nav>
    </header>
  );
}

export default Header;
