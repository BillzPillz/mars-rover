// packages
import React from 'react'
// styles
import styles from './Mars.module.css'
// types
import { ICoordinates } from '../../types/shared.types'

interface IPropTypes {
  locations: ICoordinates[]
}

const Mars = (props: IPropTypes) => {
  const { locations } = props

  return (
    <div className={styles['mars-grid']}>
      {locations.map(location => {
        const coordinates = `${location.x}:${location.y}`

        return (
          <div key={coordinates} className={styles['location']}>
            {coordinates}
          </div>
        )
      })}
    </div>
  )
}

export default Mars
