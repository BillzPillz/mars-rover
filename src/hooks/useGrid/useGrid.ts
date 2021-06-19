/* eslint-disable react-hooks/exhaustive-deps */
// packages
import { useEffect, useState } from 'react'
// helpers
import generateGridItems from './helpers/generateGridItems'
import generateGrid from './helpers/generateGrid'
// types
import { ICoordinates, IGridItem } from '../../types/shared.types'

const useGrid = (roverCount: number, obstacleCount: number) => {
  const [locations, setLocations] = useState<ICoordinates[]>()
  const [rovers, setRovers] = useState<IGridItem[]>([])
  const [obstacles, setObstacles] = useState<IGridItem[]>()

  useEffect(() => {
    setLocations(generateGrid())
    setRovers(generateGridItems(roverCount, true))
  }, [roverCount])

  useEffect(() => {
    if (obstacleCount) setObstacles(generateGridItems(obstacleCount, false, rovers))
  }, [rovers])

  return { locations, rovers, obstacles }
}

export default useGrid
