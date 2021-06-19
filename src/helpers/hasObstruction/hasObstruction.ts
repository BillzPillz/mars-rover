import { ICoordinates } from '../../types/shared.types'

const hasObstruction = (location: ICoordinates, obstructions?: ICoordinates[]): boolean => {
  return obstructions ? obstructions.some(({ x, y }) => location.x === x && location.y === y) : false
}

export default hasObstruction
