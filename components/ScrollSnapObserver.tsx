"use client";

import { useEffect } from "react";

interface ScrollSnapObserverProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function ScrollSnapObserver({ containerRef }: ScrollSnapObserverProps) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove active class from all sections
            const sections = container.querySelectorAll("section");
            sections.forEach((section) => {
              section.classList.remove("snap-active");
            });
            
            // Add active class to current section
            entry.target.classList.add("snap-active");
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible for better responsiveness
        rootMargin: "0px",
      }
    );

    // Observe all sections
    const sections = container.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Set first section as active initially
    if (sections.length > 0) {
      sections[0].classList.add("snap-active");
    }

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return null;
}
