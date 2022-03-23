import React, { useEffect, useState } from 'react';
import NetworkStationsList from './modules/NetworkStationsList';
import DevicesList from './modules/DevicesList';
import { TNetwork, TDevice } from './types/global';
import { getOptimalNetwork, showOutput } from './utilities/utils';
import './App.css';
import antenaSVG from './antena.svg'

function App() {
  const [selectedDevice, setSelectedDevice] = useState <null | TDevice> (null);
  const [bestStation, setBestStation] = useState <null | TNetwork> (null);

  useEffect(() => {
    selectedDevice && setBestStation(getOptimalNetwork(selectedDevice));
  }, [selectedDevice]);
  
  useEffect(() => {
    console.log('Extra test:', bestStation);
  }, [bestStation]);

  const selectDevice = function(device: null | TDevice): void {
    setSelectedDevice(device);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1><img className='App-logo' src={ antenaSVG } alt='' /> Network Finder</h1>
        <h2>Find the optimal Network Station for your Device's coordinates</h2>
      </header>
      <main>
        <DevicesList
          selectDevice={ selectDevice }
          />
        <NetworkStationsList />
        { selectedDevice && <p className='output'>{ showOutput(selectedDevice, bestStation) }</p> }
      </main>
    </div>
  );
}

export default App;
