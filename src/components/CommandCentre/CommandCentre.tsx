// Packages
import React, { useState } from 'react'
// helpers
import filterCommands from './helpers/filterCommands'
import updateRoversLocation from './helpers/updateRoversLocation'
import getCurrentPosition from './helpers/getCurrentPosition'
// styles
import styles from './CommandCentre.module.css'
// types
import { IGridItem } from '../../types/shared.types'

interface IPropTypes {
  rovers: IGridItem[]
  setUpdatedRovers: (updatedRovers: IGridItem[]) => void
  obstacles?: IGridItem[]
}
interface IIndexedState {
  [key: number]: string
}

const CommandCentre = ({ rovers, setUpdatedRovers, obstacles }: IPropTypes) => {
  const [commands, setCommands] = useState<IIndexedState>({})

  const commandRover = (index: number): void => {
    const filteredCommands: string[] = filterCommands(commands[index])
    if (!filteredCommands.length) return

    const obstructions = obstacles ? [...obstacles, ...rovers] : rovers
    const updatedRover = updateRoversLocation(filteredCommands, rovers[index], obstructions)
    const updatedRovers = [...rovers]
    updatedRovers.splice(index, 1, updatedRover)

    setUpdatedRovers(updatedRovers)
    updateCommands(index, '')
  }

  const updateCommands = (index: number, value: string) => {
    const updatedCommands = { ...commands, [index]: value }
    setCommands(updatedCommands)
  }

  return (
    <div className={styles['command-centre']}>
      {rovers.map((rover, index) => {
        const currentPosition = getCurrentPosition(rover)
        const inputValue = commands[index] ?? ''

        return (
          <div className={styles['control']} key={rover.id}>
            <h2 className={styles['title']}>Rover {index + 1}</h2>
            <input
              className={styles['input']}
              id="command"
              type="text"
              value={inputValue}
              onChange={e => updateCommands(index, e.target.value)}
            />
            <button className={styles['button']} onClick={() => commandRover(index)}>
              Command
            </button>
            <span className={styles['location']}>Current location: {currentPosition}</span>
          </div>
        )
      })}
    </div>
  )
}

export default CommandCentre
