// packages
import React from 'react'
// components
import Rover from '../Rover'
import Obstacle from '../Obstacle'
// helper
import hasObstruction from '../../helpers/hasObstruction'
// styles
import styles from './Mars.module.css'
// types
import { ICoordinates } from '../../types/shared.types'

interface IPropTypes {
  locations: ICoordinates[]
  rovers: ICoordinates[]
  obstacles?: ICoordinates[]
}

const Mars = (props: IPropTypes) => {
  const { locations, rovers, obstacles } = props

  return (
    <div className={styles['mars-grid']}>
      {locations.map(location => {
        const hasRover = hasObstruction(location, rovers)
        const hasObstacle = hasObstruction(location, obstacles)
        const coordinates = `${location.x}:${location.y}`

        return (
          <div key={coordinates} className={styles['location']} data-testid="location">
            {hasRover ? <Rover id={rovers.findIndex(r => hasObstruction(location, [r])) + 1} /> : hasObstacle ? <Obstacle /> : coordinates}
          </div>
        )
      })}
    </div>
  )
}

export default Mars
