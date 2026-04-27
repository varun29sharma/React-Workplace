import { useState } from 'react'
import Counter from './Counter'
import './App.css'
import Dumbo from './Dumbo'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>State Demo</h1>
      {/* <Counter /> */}
      <Dumbo />
    </div>
  )
}

export default App
