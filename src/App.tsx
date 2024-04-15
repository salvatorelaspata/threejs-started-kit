import { useEffect, useRef } from 'react'
import { useScene } from './hooks/useScene'

function App() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    useScene(ref)
  }
  , [])
  return (
    <>
      <canvas ref={ref}/>
    </>
  )
}

export default App
