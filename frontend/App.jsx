// frontend/src/App.jsx (Temporary test version)
import React from 'react';
import { Routes, Route } from 'react-router-dom';

console.log('🔥 App.jsx is loading!');

function HomePage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#0EA5E9', fontSize: '48px' }}>Lintro Marketplace</h1>
      <p style={{ fontSize: '20px', color: '#333' }}>React App is working! 🎉</p>
      <p style={{ fontSize: '16px', color: '#666' }}>If you see this, the frontend is rendering correctly.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;