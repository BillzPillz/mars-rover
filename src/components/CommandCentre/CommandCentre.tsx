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

  const commandRovers = (index?: number): void => {
    const allIndexes = Object.keys(commands).map(i => Number(i))
    // If no unique index is supplied, run all commands
    const indexes = index ? [index] : allIndexes
    const errorMessage = 'Please enter a valid command'
    const updatedRovers = [...rovers]
    const updatedCommands = { ...commands }
    let updatedErrors = { ...errors }

    indexes.forEach(i => {
      const filteredCommands = filterCommands(commands[i])

      if (!filteredCommands.length) {
        updatedErrors = { ...updatedErrors, [i]: errorMessage }
        return
      }

      // merge updated rovers with obstacles to ensure no clash
      const obstructions = obstacles ? [...obstacles, ...updatedRovers] : updatedRovers
      const updatedRover = updateRoversLocation(filteredCommands, rovers[i], obstructions)

      // Replace relevant rover in the array with updated rover
      updatedRovers.splice(i, 1, updatedRover)

      // Delete commands and errors once rover is updated
      delete updatedCommands[i]
      delete updatedErrors[i]
    })

    setUpdatedRovers(updatedRovers)
    setCommands(updatedCommands)
    setErrors(updatedErrors)
  }

  const updateCommands = (index: number, value: string): void => {
    const updatedCommands = { ...commands, [index]: value }
    setCommands(updatedCommands)
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
            <button className={styles['button']} onClick={() => commandRovers(index)} data-testid={`rover-button-${index}`}>
              Command
            </button>
            {errorMessage && <span className={styles['error']}>{errorMessage}</span>}
            <span className={styles['location']}>Current location: {currentPosition}</span>
          </div>
        )
      })}
      <div className={styles['command-all-wrapper']}>
        <button className={styles['command-all-button']} onClick={() => commandRovers()}>
          Command all rovers
        </button>
      </div>
    </div>
  )
}

export default CommandCentre
