
import React from 'react';

const Navigation = ({ currentView, setView }) => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    background: '#fff',
    borderBottom: '1px solid #eee',
    marginBottom: '20px'
  };

  const buttonStyle = (viewName) => ({
    padding: '10px 20px',
    border: 'none',
    background: currentView === viewName ? '#007bff' : 'transparent',
    color: currentView === viewName ? '#fff' : '#666',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s'
  });

  return (
    <nav style={navStyle}>
      <button style={buttonStyle('intro')} onClick={() => setView('intro')}>
        1. Theory
      </button>
      <button style={buttonStyle('sim')} onClick={() => setView('sim')}>
        2. Simulator
      </button>
      <button style={buttonStyle('analysis')} onClick={() => setView('analysis')}>
        3. Analysis
      </button>
    </nav>
  );
};

export default Navigation;
