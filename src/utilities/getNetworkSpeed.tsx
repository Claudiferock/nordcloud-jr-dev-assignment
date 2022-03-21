export const getSpeed = (network: [any, any, any], device: [any, any], deviceDistance: number) => {
  const networkReach = network[2];
  //const [networkX, networkY, networkReach] = network;
  //const [deviceX, deviceY] = device;
  //const deviceDistance = getDistance(networkX, deviceX, networkY, deviceY);
  const networkSpeed = deviceDistance > networkReach ? 0 : Math.pow((networkReach - deviceDistance), 2);

  return networkSpeed;
}