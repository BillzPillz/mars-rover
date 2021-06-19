// helpers
import hasObstruction from '../../../../helpers/hasObstruction'
// types
import { IGridItem } from '../../../../types/shared.types'

const updateRoversLocation = (commands: string[], rover: IGridItem, obstructions: IGridItem[]) => {
  const updatedRover = { ...rover }
  let direction = rover.direction

  commands.forEach(command => {
    switch (command) {
      case 'l':
        // Left
        direction = direction === 1 ? 4 : direction - 1
        break
      case 'r':
        // Right
        direction = direction === 4 ? 1 : direction + 1
        break
      case 'm':
        // Move
        switch (direction) {
          case 1: {
            // North
            const updatedY = updatedRover.y === 10 ? 1 : updatedRover.y + 1

            if (!hasObstruction({ ...updatedRover, y: updatedY }, obstructions)) updatedRover.y = updatedY
            else console.log('Impact!!')

            break
          }
          case 2: {
            // East
            const updatedX = updatedRover.x === 10 ? 1 : updatedRover.x + 1

            if (!hasObstruction({ ...updatedRover, x: updatedX }, obstructions)) updatedRover.x = updatedX
            else console.log('Impact!!')

            break
          }
          case 3: {
            // South
            const updatedY = updatedRover.y === 1 ? 10 : updatedRover.y - 1

            if (!hasObstruction({ ...updatedRover, y: updatedY }, obstructions)) updatedRover.y = updatedY
            else console.log('Impact!!')

            break
          }
          case 4: {
            // West
            const updatedX = updatedRover.x === 1 ? 10 : updatedRover.x - 1

            if (!hasObstruction({ ...updatedRover, x: updatedX }, obstructions)) updatedRover.x = updatedX
            else console.log('Impact!!')

            break
          }
        }
        break
    }
  })

  return { ...updatedRover, direction }
}

export default updateRoversLocation
