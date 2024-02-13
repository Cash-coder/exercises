// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component from App.tsx

// If you're using React 18 or newer, you should use createRoot instead.
// For older versions of React, you can use ReactDOM.render directly.
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); // The root element in your HTML
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
