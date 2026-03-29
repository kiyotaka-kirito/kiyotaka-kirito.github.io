import React from 'react';

/**
 * Reusable Container component for consistent site-wide layout.
 * Ensures all sections follow the same max-width and paddings defined by the global `.container` class.
 */
export default function Container({ children, className = '' }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}
