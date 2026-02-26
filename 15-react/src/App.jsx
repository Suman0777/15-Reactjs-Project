import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './component data/accordian'
import StarRating from './component data/StarRating'
import Qr from './component data/Qr-Code-Genrate'
import Tabss from './component data/Tabs'
import Texttoimage from './component data/imgaeGenration/Texttoimage'
import { DotBackgroundDemo } from './component data/GidTesting/Gridtestingbox'
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <StarRating noOfstar = {10} /> */}
      {/* < Qr /> */}
      {/* < Tabss /> */}
      {/* <Texttoimage/> */}
      <DotBackgroundDemo />
    </>
  );
}

export default App
