import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './component data/accordian'
import StarRating from './component data/StarRating'
import ImageSlider from './component data/image-Slider'
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <StarRating noOfstar = {10} /> */}
      <ImageSlider 
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  )
}

export default App
