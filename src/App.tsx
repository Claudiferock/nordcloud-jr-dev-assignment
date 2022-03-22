import React, { useEffect, useState } from 'react';
import NetworkStationsList from './modules/NetworkStationsList';
import DevicesList from './modules/DevicesList';
import { TNetwork, TDevice } from './types/global';
import { getOptimalNetwork, showOutput } from './utilities/utils';
import './App.css';

function App() {
  const [selectedDevice, setSelectedDevice] = useState <null | TDevice> (null);
  const [bestStation, setBestStation] = useState <null | TNetwork> (null);
  const [output, setOutput] = useState <string> ('');

  useEffect(() => {
    selectedDevice && setBestStation(getOptimalNetwork(selectedDevice));
    console.log('Extra test:', getOptimalNetwork([100,100]))
  }, [selectedDevice]);

  useEffect(() => {
    output = showOutput(selectedDevice, bestStation)
  }, [bestStation]);

  const selectDevice = function(device: null | TDevice): void {
    setSelectedDevice(device);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Find the optimal Network Station for your Device</h1>
      </header>
      <main>
      {selectedDevice && <p>{ showOutput(selectedDevice, bestStation) }</p>}
        <DevicesList
          selectDevice={ selectDevice }
        />
        <NetworkStationsList
          
        />
      </main>
    </div>
  );
}

export default App;
