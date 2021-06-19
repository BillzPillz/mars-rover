// Packages
import React from 'react'
// Components
import Mars from './components/Mars'
// Hooks
import useGrid from './hooks/useGrid'

function App() {
  const { locations } = useGrid()

  return <>{locations && <Mars locations={locations} />}</>
}

export default App
