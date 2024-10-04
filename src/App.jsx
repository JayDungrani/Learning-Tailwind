import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typography from './Components/Typography'
import Spacing from './Components/Spacing'
import Flexbox from './Components/Flexbox'
import Grid from './Components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Typography/> */}
      {/* <Spacing/> */}
      {/* <Flexbox/> */}
      <Grid/>
    </>
  )
}

export default App
