import { useState } from 'react'
import CustomCursor from './components/shared/CustomCursor'
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero'

function App() {
  return (
    // We use a React Fragment (<>) to return multiple elements
    <>
      <CustomCursor />
      <Navbar/>
        <Hero/>
      {/* This is where all your other pages and sections will go.
        For now, let's add some test content.
      */}
      
    </>
  );


}

export default App
