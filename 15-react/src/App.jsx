import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './component data/accordian'
import StarRating from './component data/StarRating'

function App() {
  return (
    <>
      {/* <Accordion /> */}
      <StarRating noOfstar = {10} />
    </>
  )
}

export default App
