/* Entry point for Vite. Replaces the runtime-Babel bootstrap that used to
   live in <script type="module"> inside index.html. The build step inlines
   React + ReactDOM into a single minified bundle so the browser never has
   to compile JSX. */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Expose React on window for the few places App.jsx does `const gsap = window.gsap`
// style namespace destructuring (kept for the original code's expectations —
// safe to drop later if we refactor those destructures into ES imports).
window.React = React;

const fallback = document.getElementById('loading-fallback');
if (fallback) fallback.remove();

createRoot(document.getElementById('root')).render(React.createElement(App));
