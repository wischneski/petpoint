import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <div className="min-h-screen font-sans bg-white">
        <HomePage />
      </div>
    </StaticRouter>
  );
}
