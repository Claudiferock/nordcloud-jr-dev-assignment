import { Network, Device} from '../types/global';

export const uid = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);

  return head + tail;
}

export const getSpeed = (network: Network, deviceDistance: number) => {
  const networkReach = network[2];
  //const [networkX, networkY, networkReach] = network;
  //const [deviceX, deviceY] = device;
  //const deviceDistance = getDistance(networkX, deviceX, networkY, deviceY);
  const networkSpeed = deviceDistance > networkReach ? 0 : Math.pow((networkReach - deviceDistance), 2);

  return networkSpeed;
}

export const getDistance = (network: Network, device: Device) => {
  // d is the distance between two points (coordinates) in space 
  // d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
  const [x1, y1] = device;
  const [x2, y2] = network;
  const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  
  return distance;
}