// Helpers
import hasObstruction from '../../../../helpers/hasObstruction'
import verifyItemCount from '../verifyItemCount'
import generateLocation from '../generateLocation'

// Types
import { IGridItem } from '../../../../types/shared.types'

const generateGridItems = (itemCount: number, isRover: boolean, rovers?: IGridItem[]): IGridItem[] => {
  const gridItemArray: Array<IGridItem> = []
  const safeItemCount = verifyItemCount(itemCount)

  let i = 1
  // While so we can easily skip iteration
  while (i <= safeItemCount) {
    const coordinates = generateLocation()
    // Also check for rovers
    const allGridItems = rovers ? [...gridItemArray, ...rovers] : gridItemArray
    const isLocationInUse = hasObstruction(coordinates, allGridItems)

    // Skip iteration and do not push if location is in use
    if (!isLocationInUse) {
      const idPrefix = isRover ? 'r' : 'o'
      const itemID = `${idPrefix}-${i}`
      const newItem = { ...coordinates, id: itemID, direction: 1 }

      gridItemArray.push(newItem)
      i++
    }
  }

  return gridItemArray
}

export default generateGridItems
