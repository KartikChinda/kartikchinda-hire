import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import K from "./K";

const Kmodel = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <K />
            </Suspense>
        </Canvas>
    )
}

export default Kmodel; 