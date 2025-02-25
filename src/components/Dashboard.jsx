import React from "react";
import { FaChartLine, FaRobot, FaDatabase } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  // Sample data for visualization
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "AI Predictions",
        data: [65, 59, 80, 81, 56, 75],
        fill: false,
        backgroundColor: "#4F46E5",
        borderColor: "#4F46E5",
      },
    ],
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>AI-Powered Data Visualization & Analytics</h1>
        <p>Harness the power of AI to analyze and visualize your data in real time.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Real-Time Analytics</h3>
          <p>Get live insights from your data with AI-driven analytics.</p>
        </div>
        <div className="feature-card">
          <FaRobot className="feature-icon" />
          <h3>AI Predictions</h3>
          <p>Advanced machine learning models help predict trends.</p>
        </div>
        <div className="feature-card">
          <FaDatabase className="feature-icon" />
          <h3>Big Data Processing</h3>
          <p>Handle and process massive datasets efficiently.</p>
        </div>
      </section>

      {/* AI Data Visualization */}
      <section className="chart-section">
        <h2>AI Data Insights</h2>
        <Line data={data} />
      </section>
    </div>
  );
};

export default Dashboard;
