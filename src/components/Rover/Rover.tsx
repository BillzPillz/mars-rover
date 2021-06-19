// packages
import React from 'react'
// components
import { ReactComponent as RoverIcon } from '../../assets/rover.svg'
// styles
import styles from './Rover.module.css'

interface IPropTypes {
  id: number
}

const Rover = (props: IPropTypes) => {
  return (
    <div className={styles['rover']}>
      <span className={styles['id']}>{props.id}</span>
      <RoverIcon />
    </div>
  )
}

export default Rover
