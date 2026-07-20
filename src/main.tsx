import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <section className="card" aria-label="Project status">
        <p className="eyebrow">FLYRANK AI INTERNSHIP • WEEK 4</p>
        <h1>Ayesha Asif</h1>
        <p className="status">Empty but Live ✓</p>
        <p className="description">
          This React + TypeScript project is successfully deployed and publicly accessible.
        </p>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
