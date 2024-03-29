import React from "react"

import CanvasContainer from "./components/CanvasContainer";
import HeaderSection from "./pages/HeaderSection";
import SecondSection from "./pages/SecondSection";

function App() {
  return (
    <main className="Appp overflox-x-hidden">
      <div className="h-screen w-full fixed top-10 z-10 hidden lg:block">
        <CanvasContainer/>
      </div>
     
        <HeaderSection/>
        <SecondSection/>
      

    </main>
  )
}

export default App
