import './App.css'
import AboutUs from './blocks/AboutUs'
import Gallery from './blocks/Gallery'
import Reviews from './blocks/Reviews'
import FAQ from './blocks/FAQ'
import Contacts from './blocks/Contacts'
import Price from './blocks/Price'

function App() {
  return (
    <div className='z-20'>
      <AboutUs />
      {/* <Gallery /> */}
      <Price />
      <Reviews />
      <FAQ />
      <Contacts />
    </div>
  )
}

export default App
