import { TNetwork, TDevice, TNetworkState, TDeviceState} from '../types/global';
import { NETWORKSTATIONS } from './networkStations';

export const uid = function (): string {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);

  return head + tail;
}

export const getSpeed = function (network: TNetwork, deviceDistance: number): number {
  const networkReach = network[2];
  const networkSpeed = deviceDistance > networkReach ? 0 : Math.pow((networkReach - deviceDistance), 2);

  return networkSpeed;
}

export const getDistance = function (network: TNetwork, device: TDevice): number {
  // distance between two points (coordinates) in space 
  // d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
  const [x1, y1] = device;
  const [x2, y2] = network;
  const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  
  return distance;
}

export const getOptimalNetwork = function (device: TDeviceState): TNetworkState {
  let bestSpeed: number = 0;
  let bestNetworkStation: TNetworkState = null;
  device && NETWORKSTATIONS.forEach(network => {
    const distance = getDistance(network, device);
    const speed = getSpeed(network, distance);
    if (speed > bestSpeed) {
      bestSpeed = speed;
      bestNetworkStation = network;
    };
  });

  return bestNetworkStation;
}

export const showOutput = function (device: TDevice, network: TNetworkState): string {
  return network === null 
    ? `No network station within reach for point ${device[0]},${device[1]}` 
    : `Best network station for point ${device[0]},${device[1]} is ${network[0]},${network[1]} with speed ${network[2]}`;
}