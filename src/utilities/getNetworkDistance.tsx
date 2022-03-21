export const getDistance = (x1: number, x2: number, y1: number, y2: number) => {
  // d is the distance between two points (coordinates) in space 
  // d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
  const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  
  return distance;
}