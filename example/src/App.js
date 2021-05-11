import React from 'react';
import './index.css';

import { AnalogClock } from 'react-clock-analog';
import 'react-clock-analog/dist/index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='Title'>
        Analog Clock
      </div>
      <AnalogClock
        className='AnalogClock'
        hour={4}
        minute={30}
        loading={false}
        darkMode={false}
        centerDot={true}
      />
    </div>
  );
};

export default App;
