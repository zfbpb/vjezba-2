import { useState } from 'react'
import './App.scss'
import Component1 from './components/component1'
import Component2 from './components/component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1><Component1 /></h1>
      <h2><Component2 /></h2>
    </div>
  )
}

export default App
