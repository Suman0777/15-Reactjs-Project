import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './component data/accordian'
import StarRating from './component data/StarRating'
import Qr from './component data/Qr-Code-Genrate'
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <StarRating noOfstar = {10} /> */}
      < Qr />
    </>
  );
}

export default App
