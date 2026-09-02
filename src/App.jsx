import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuthFlow from "./components/AuthFlow";
import AboutProject from "./components/AboutProject";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const features = [
    {
      title: "Authentication Templates",
      text: "Beautiful login and signup forms with clean validation, error handling, and responsive styling."
    },
    {
      title: "Authentication Templates",
      text: "Simple designs and signup flows with secure validation, error handling, and modern responsive layouts."
    },
    {
      title: "Authentication Templates",
      text: "Reusable pages with login forms, password validation and responsive styling."
    },
    {
      title: "Authentication Templates",
      text: "Create signup and login forms with simple validation and clean layouts."
    },
    {
      title: "Authentication Templates",
      text: "Flexible authentication pages designed for modern web applications."
    },
    {
      title: "Authentication Templates",
      text: "Responsive authentication screens with simple and reusable components."
    }
  ];

  return (
    <div className="page">

      <Navbar />

      <main>
        <section className="hero">
          <Hero />
          <AuthFlow />
        </section>

        <AboutProject />

        <section className="included">
          <h2>What's Included</h2>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;