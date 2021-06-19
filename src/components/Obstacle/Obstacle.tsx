// packages
import React from 'react'
// components
import { ReactComponent as Rock } from '../../assets/rock.svg'
// styles
import styles from './Obstacle.module.css'

const Obstacle = () => {
  return (
    <span className={styles['rover']}>
      <Rock />
    </span>
  )
}

export default Obstacle
