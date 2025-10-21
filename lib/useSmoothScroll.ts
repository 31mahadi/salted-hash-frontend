"use client";

import { useEffect, useRef } from "react";

export function useSmoothScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        container.style.scrollBehavior = "smooth";
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const scrollAmount = window.innerHeight * 0.8; // 80% of viewport height
      
      if (delta > 0) {
        // Scrolling down
        container.scrollBy({
          top: scrollAmount,
          behavior: "smooth"
        });
      } else {
        // Scrolling up
        container.scrollBy({
          top: -scrollAmount,
          behavior: "smooth"
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = window.innerHeight;
      
      switch (e.key) {
        case "ArrowDown":
        case " ":
          e.preventDefault();
          container.scrollBy({
            top: scrollAmount,
            behavior: "smooth"
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          container.scrollBy({
            top: -scrollAmount,
            behavior: "smooth"
          });
          break;
        case "Home":
          e.preventDefault();
          container.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          break;
        case "End":
          e.preventDefault();
          container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth"
          });
          break;
      }
    };

    // Add event listeners
    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("keydown", handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return containerRef;
}
