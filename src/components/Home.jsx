import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function HomePage() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <div className="logo">
            <h1>College Management System</h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/login">Login</Link> {/* Add Login button */}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://lbce.edu.in/" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to Our College</h2>
          <p>Your future starts here. Join our community of learners and build a successful career.</p>
          <a href="#" className="cta-button">Learn More</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Key Features</h2>
        <div className="feature-item">
          <h3>Student Management</h3>
          <p>Manage student data, attendance, grades, and more.</p>
        </div>
        <div className="feature-item">
          <h3>Course Management</h3>
          <p>Efficiently manage courses, schedules, and instructors.</p>
        </div>
        <div className="feature-item">
          <h3>Admin Dashboard</h3>
          <p>Access all features with a powerful admin dashboard.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 College Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
