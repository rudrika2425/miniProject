import { useState } from 'react'
import './App.css'
import AddPropertyForm from '../src/AddProperty/property'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <AddPropertyForm/>
    </>
  )
}

export default App
