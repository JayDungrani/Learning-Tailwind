import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-sky-400 bg-black">
        This is blue
      </h1>
      <h1 class="text-purple-700 bg-white">
        This is purple
      </h1>
      <h1 class="text-slate-600 bg-teal-200">
        This is slate
      </h1>
    </>
  )
}

export default App
