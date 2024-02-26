import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Car from "./Car";

const CanvasContainer = () => {
  return (
    <Canvas>
        <OrbitControls enableZoom={false}/>
        <Environment preset="city" />
        <Suspense>
            <Car/>
        </Suspense>
    </Canvas>
  )
}
export default CanvasContainer