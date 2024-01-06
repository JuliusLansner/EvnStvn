import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // The effect runs when an error occurs in any child component
    const handleError = (error, info) => {
      console.error('Error caught by error boundary:', error, info);
      setHasError(true);
    };

    // Attach the error handler to the window's error event
    window.addEventListener('error', handleError);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  if (hasError) {
    // Render fallback UI when an error occurs
    return <h1>Something went wrong.</h1>;
  }

  // Render children as usual if no error occurred
  return children;
};

// Example usage of the error boundary
const MyComponent = () => {
  // Wrap the component tree with the error boundary
  return (
    <ErrorBoundary>
      {/* The rest of the component tree goes here */}
    </ErrorBoundary>
  );
};