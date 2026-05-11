import { useState } from 'react'
import Counter from './Counter'
import './App.css'
import Dumbo from './Dumbo'
import Scorekeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import Scorekeeper2 from './ScoreKeeper2'

function App() {
  // const [count, setCount] = useState(0)

  return(
    <div>
      <Scorekeeper2 n={4} target={10}/>
      {/* <EmojiClicker /> */}
      {/* <Scorekeeper /> */}
      {/* <h1>State Demo</h1> */}
      {/* <Counter /> */}
      {/* <Dumbo /> */}
    </div>
  )
}

export default App
