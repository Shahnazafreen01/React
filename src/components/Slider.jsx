import React, {
  useEffect,
  useState,
} from "react";

import styles from "./SliderStyle";

const slides = [
  {
    title: "Complete Auth Flow",
    text:
      "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
  },

  {
    title: "Interactive Web Practice",
    text:
      "Practice modern web development with reusable components, routing and responsive layouts.",
  },

  {
    title: "Modern React Project",
    text:
      "Build a clean React application using React Router, Theme Provider and reusable components.",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] =
    useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (current) =>
        (current + 1) % slides.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (current) =>
        (current - 1 + slides.length) %
        slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.slider}>

      <div
        style={{
          ...styles.track,
          transform: `translateX(-${
            currentSlide * 100
          }%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={styles.slide}
          >
            <h2 style={styles.title}>
              {slide.title}
            </h2>

            <p style={styles.text}>
              {slide.text}
            </p>
          </div>
        ))}
      </div>

      <button
        style={{
          ...styles.arrow,
          ...styles.leftArrow,
        }}
        onClick={previousSlide}
      >
        ‹
      </button>

      <button
        style={{
          ...styles.arrow,
          ...styles.rightArrow,
        }}
        onClick={nextSlide}
      >
        ›
      </button>

      <div style={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentSlide(index)
            }
            style={{
              ...styles.dot,
              ...(currentSlide === index
                ? styles.activeDot
                : {}),
            }}
          />
        ))}
      </div>

    </div>
  );
}