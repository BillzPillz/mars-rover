import CONSTANTS from './constants'
// Verifies itemCount is within min and max values.
const verifyItemCount = (itemCount: number, isRover: boolean = false) => {
  const {MAX_ROVERS, MAX_OBSTACLES, MIN_OBSTACLES, MIN_ROVERS} = CONSTANTS

  const maxItems = isRover ? MAX_ROVERS : MAX_OBSTACLES
  const minItems = isRover ? MIN_ROVERS : MIN_OBSTACLES
  const maxApplied = itemCount > maxItems ? maxItems : itemCount
  const minApplied = maxApplied < minItems ? minItems : maxApplied

  return minApplied
}

export default verifyItemCount