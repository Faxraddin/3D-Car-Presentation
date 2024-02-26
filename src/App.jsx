import React from "react"

import CanvasContainer from "./components/CanvasContainer"

function App() {
  return (
    <main className="overflox-x-hidden">
      <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
        <CanvasContainer/>
      </div>
        
    </main>
  )
}

export default App
