
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Simulator from './components/Simulator';
import Analysis from './components/Analysis';

const App = () => {
  const [view, setView] = useState('intro'); // 'intro', 'sim', 'analysis'

  const renderView = () => {
    switch(view) {
      case 'intro': return <Introduction />;
      case 'sim': return <Simulator />;
      case 'analysis': return <Analysis />;
      default: return <Introduction />;
    }
  };

  return (
    <div>
      <Navigation currentView={view} setView={setView} />
      {renderView()}
    </div>
  );
};

export default App;
