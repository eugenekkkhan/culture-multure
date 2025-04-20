import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './blocks/AboutUs'
import Gallery from './blocks/Gallery'
import Reviews from './blocks/Reviews'
import FAQ from './blocks/FAQ'
import Contacts from './blocks/Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutUs />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contacts />
    </>
  )
}

export default App
