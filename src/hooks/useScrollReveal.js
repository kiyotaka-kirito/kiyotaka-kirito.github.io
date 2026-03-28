import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — Returns a ref and a boolean `isVisible`.
 * Attach the ref to any element; `isVisible` becomes true once
 * the element scrolls into the viewport.
 *
 * @param {number} threshold - 0–1, how much of element must be visible (default 0.1)
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Fire once only
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
