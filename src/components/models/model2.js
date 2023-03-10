import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import { Model2 } from "./Planet";
export default function Model22() {
  const [rotation, setRotation] = useState(0.1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((rotation) => rotation + 0.002);
    }, 10); // Update every 10ms

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Canvas>
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.1}
        />
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
          <Model2
            scale={window.innerWidth >= 1024 ? [2.5, 2.5, 2.5] : [0.8, 0.8, 0.8]}
            rotation-y={rotation}
            position={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
