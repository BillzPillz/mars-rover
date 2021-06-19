// Packages
import React from 'react'
// helpers
import getCurrentPosition from './helpers/getCurrentPosition'
// styles
import styles from './CommandCentre.module.css'
// types
import { IGridItem } from '../../types/shared.types'

interface IPropTypes {
  rovers: IGridItem[]
}

const CommandCentre = ({ rovers }: IPropTypes) => {
  return (
    <div className={styles['command-centre']}>
      {rovers.map((rover, index) => {
        const currentPosition = getCurrentPosition(rover)

        return (
          <div className={styles['control']} key={rover.id}>
            <h2 className={styles['title']}>Rover {index + 1}</h2>
            <input className={styles['input']} id="command" type="text" />
            <button className={styles['button']}>Command</button>
            <span className={styles['location']}>Current location: {currentPosition}</span>
          </div>
        )
      })}
    </div>
  )
}

export default CommandCentre
