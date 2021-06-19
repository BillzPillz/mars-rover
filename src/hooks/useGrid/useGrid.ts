/* eslint-disable react-hooks/exhaustive-deps */
// packages
import { useEffect, useState } from 'react';
// helpers
import hasObstruction from '../../helpers/hasObstruction'
// types
import { ICoordinates, IGridItem } from '../../types/shared.types';

const useGrid = (roverCount: number, obstacleCount: number) => {
  const [locations, setLocations] = useState<ICoordinates[]>();
  const [rovers, setRovers] = useState<IGridItem[]>([]);
  const [obstacles, setObstacles] = useState<IGridItem[]>();

  useEffect(() => {
    setLocations(generateGrid());
    setRovers(generateGridItems(roverCount, true));
  }, [roverCount])

  useEffect(() => {
    if (obstacleCount) setObstacles(generateGridItems(obstacleCount));
  }, [rovers])

  const verifyItemCount = (itemCount: number, isRover: boolean = false) => {
    const maxRovers = 10;
    const maxObstacles = 25;
    const minRovers = 1;
    const minObstacles = 0;

    // Verifies itemCount is within min and max values.
    const maxItems = isRover ? maxRovers : maxObstacles
    const minItems = isRover ? minRovers : minObstacles
    const maxApplied = itemCount > maxItems ? maxItems : itemCount
    const minApplied = maxApplied < minItems ? maxApplied : itemCount

    return minApplied
  }

  const generateGridItems = (itemCount: number, isRover: boolean = false): IGridItem[] => {
    const gridItemArray: Array<IGridItem> = [];
    const safeItemCount = verifyItemCount(itemCount)
    

    let i = 1
    // While so we can easily skip iteration
    while (i <= safeItemCount) {
      const allGridItems = rovers ? [...gridItemArray, ...rovers] : gridItemArray
      const coordinates = generateLocation()
      const isLocationInUse = hasObstruction(coordinates, allGridItems)

      // Skip iteration and don't push if location is in use.
      if (!isLocationInUse) {
        const idPrefix = isRover ? 'r' : 'o'
        const itemID = `${idPrefix}-${i}`
        const newItem = {...coordinates, id: itemID, direction: 1}

        gridItemArray.push(newItem)
        i++;
      }
    }

    return gridItemArray;
  }

  const generateLocation = (): ICoordinates => {
    const x = Math.floor((Math.random() * 10) + 1);
    const y = Math.floor((Math.random() * 10) + 1);

    return { x, y };
  }

  const generateGrid = (): ICoordinates[] => {
    const grid: Array<ICoordinates> = [];

    for (let y = 1; y <= 10; y++) {
      for (let x = 1; x <= 10; x++) {
        grid.push({ x, y });
      } 
    }

    // reverse so we can display the grid starting from the bottom
    // grid is then horizontally flipped in the css
    return grid.reverse();
  }

  return { locations, rovers, obstacles };
}

export default useGrid;