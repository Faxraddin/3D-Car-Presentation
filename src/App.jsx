import React from "react"

import CanvasContainer from "./components/CanvasContainer";
import HeaderSection from "./pages/HeaderSection";

function App() {
  return (
    <main className="overflox-x-hidden">
      <div className="h-screen w-full fixed top-10 z-10 hidden lg:block">
        <CanvasContainer/>
      </div>
      <HeaderSection/>
    </main>
  )
}

export default App
