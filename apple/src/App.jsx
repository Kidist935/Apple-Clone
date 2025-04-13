import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import AlertSection from './components/AlertSection/AlertSection'
import FirstSection from './components/FirstSection/FirstSection'
import SecondSection from './components/SecondSection/SecondSection'
import ThirdSection from './components/ThirdSection/ThirdSection'
import FourthSection from './components/FourthSection/FourthSection'
import FifthSection from './components/FifthSection/FifthSection'
import SixthSection from './components/SixthSection/SixthSection'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
  <Header/>
  <AlertSection/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
  <Footer/>
    </>


  )
}

export default App
