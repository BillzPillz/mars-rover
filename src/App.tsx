// Packages
import React, { useState } from 'react'
// Components
import Mars from './components/Mars'
import CommandCentre from './components/CommandCentre'
// Hooks
import useGrid from './hooks/useGrid'
// Types
import { IGridItem } from './types/shared.types'

function App() {
  // These values determine the rover and obstacle count, e.g. 4 rovers & 10 obstacles.
  const { locations, rovers: initialRovers, obstacles } = useGrid(4, 10)
  const [updatedRovers, setUpdatedRovers] = useState<IGridItem[]>()

  const rovers = updatedRovers ?? initialRovers

  return (
    <div className="App">
      {rovers && <CommandCentre rovers={rovers} setUpdatedRovers={setUpdatedRovers} obstacles={obstacles} />}
      {locations && <Mars locations={locations} rovers={rovers} obstacles={obstacles} />}
    </div>
  )
}

export default App
