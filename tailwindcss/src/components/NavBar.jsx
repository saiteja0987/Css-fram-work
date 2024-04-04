import React from "react";
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbox">
      <div className="logo">
        <span>Kalvium</span>
      </div>
      <div className="menu">
        <a href="responsive-header">About Us</a>
        <a href="responsive-header">Contacts</a>
        <a href="responsive-header">Courses</a>
      </div>
      <div className="login-btn">
        <a href="/" className="login-link">Login</a>
      </div>
    </nav>
  );
}