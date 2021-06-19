import { ICoordinates } from '../../../../types/shared.types'

const generateLocation = (): ICoordinates => {
  const x = Math.floor(Math.random() * 10 + 1)
  const y = Math.floor(Math.random() * 10 + 1)

  return { x, y }
}

export default generateLocation
