import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='m-10 space-y-10'>
    <Header/>
    <HeroSection/>
   </div>
  )
}

export default App
