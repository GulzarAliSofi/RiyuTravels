import React, { useEffect, useState, useRef } from "react";

export default function HeroSlider({ slides = [], interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!paused) {
      timer.current = setInterval(
        () => setIndex((i) => (i + 1) % slides.length),
        interval
      );
    }
    return () => clearInterval(timer.current);
  }, [paused, slides.length, interval]);

  useEffect(() => {
    // reset if slides change and index out of bounds
    if (index >= slides.length) setIndex(0);
  }, [slides.length]);

  function goto(i) {
    setIndex(i % slides.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  if (!slides || slides.length === 0) return null;

  const slide = slides[index];

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <img
          src={slide.image}
          alt={slide.alt || slide.name}
          loading="eager"
          className="w-full h-96 object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 sm:p-10 max-w-3xl text-white">
            <h1 className="text-2xl sm:text-4xl font-bold">{slide.name}</h1>
            <p className="mt-2 mb-4 text-sm sm:text-base">{slide.short}</p>
            <a
              href="/packages"
              className="inline-block bg-accent text-white px-4 py-2 rounded-md font-medium"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:scale-105"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:scale-105"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id || i}
            onClick={() => goto(i)}
            className={
              i === index
                ? "w-4 h-4 rounded-full bg-white"
                : "w-3 h-3 rounded-full bg-white/60"
            }
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
