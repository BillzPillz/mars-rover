import { IGridItem } from '../../../../types/shared.types';

export interface IDirectionMap {
  [key: number]: string
}

const getCurrentPosition = (rover: IGridItem) => {
  const directionMap: IDirectionMap = {
    1: 'N',
    2: 'E',
    3: 'S',
    4: 'W'
  }
   
  return `${rover.x}:${rover.y}:${directionMap[rover.direction]}`
}

export default getCurrentPosition