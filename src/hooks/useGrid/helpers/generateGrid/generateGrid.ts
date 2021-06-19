import { ICoordinates } from '../../../../types/shared.types'

const generateGrid = (): ICoordinates[] => {
  const grid: Array<ICoordinates> = []

  for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
      grid.push({ x, y })
    }
  }

  // reverse so we can display the grid starting from the bottom
  // grid is then horizontally flipped in the css
  return grid.reverse()
}

export default generateGrid
