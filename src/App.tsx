import React, { useState } from 'react';
import NetworkStationsList from './modules/NetworkStationsList';
import DevicesList from './modules/DevicesList';
import { Network, Device } from './types/global';
import './App.css';

function App() {
  const [selectedDevice, setSelectedDevice] = useState <null | Device> (null);
  const [bestStation, setBestStation] = useState <null | Network> (null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find the optimal Network Station for your Device</h1>
      </header>
      <main>
        <NetworkStationsList
          
        />
        <DevicesList/>
      </main>
    </div>
  );
}

export default App;
