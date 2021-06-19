// Packages
import React from 'react'
// Components
import Mars from './components/Mars'
import CommandCentre from './components/CommandCentre'
// Hooks
import useGrid from './hooks/useGrid'

function App() {
  // These values determine the rover and obstacle count, e.g. 4 rovers, 10 obstacles.
  const { locations, rovers, obstacles } = useGrid(4, 10)

  return (
    <div className="App">
      {rovers && <CommandCentre rovers={rovers} />}
      {locations && <Mars locations={locations} rovers={rovers} obstacles={obstacles} />}
    </div>
  )
}

export default App
