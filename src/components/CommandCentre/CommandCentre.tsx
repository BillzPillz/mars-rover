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
  const [errors, setErrors] = useState<IIndexedState>({})

  const commandRover = (index: number): void => {
    const filteredCommands: string[] = filterCommands(commands[index])
    if (!filteredCommands.length) {
      updateErrors(index, 'Please enter a valid command')
      return
    }

    const obstructions = obstacles ? [...obstacles, ...rovers] : rovers
    const updatedRover = updateRoversLocation(filteredCommands, rovers[index], obstructions)
    const updatedRovers = [...rovers]
    // Replace relevant rover in the array with updated rover
    updatedRovers.splice(index, 1, updatedRover)

    setUpdatedRovers(updatedRovers)
    // clear input and errors
    updateCommands(index, '')
    if (errors[index]) updateErrors(index, '')
  }

  const updateCommands = (index: number, value: string): void => {
    const updatedCommands = { ...commands, [index]: value }
    setCommands(updatedCommands)
  }

  const updateErrors = (index: number, value: string): void => {
    const updatedErrors = { ...errors, [index]: value }
    setErrors(updatedErrors)
  }

  return (
    <div className={styles['command-centre']}>
      {rovers.map((rover, index) => {
        const currentPosition = getCurrentPosition(rover)
        const inputValue = commands[index] ?? ''
        const errorMessage = errors[index] ?? ''

        return (
          <div className={styles['control']} key={rover.id} data-testid="rover-control">
            <h2 className={styles['title']}>Rover {index + 1}</h2>
            <input
              className={styles['input']}
              id="command"
              type="text"
              value={inputValue}
              data-testid={`rover-input-${index}`}
              onChange={e => updateCommands(index, e.target.value)}
            />
            <button className={styles['button']} onClick={() => commandRover(index)} data-testid={`rover-button-${index}`}>
              Command
            </button>
            {errorMessage && <span className={styles['error']}>{errorMessage}</span>}
            <span className={styles['location']}>Current location: {currentPosition}</span>
          </div>
        )
      })}
    </div>
  )
}

export default CommandCentre
