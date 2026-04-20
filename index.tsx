import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root')!;

function doMount() {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(
      rootElement,
      <React.StrictMode><App /></React.StrictMode>
    );
  } else {
    createRoot(rootElement).render(
      <React.StrictMode><App /></React.StrictMode>
    );
  }
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => doMount(), { timeout: 8000 });
} else {
  setTimeout(doMount, 0);
}
