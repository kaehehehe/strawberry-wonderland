import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model() {
  const { scene } = useGLTF("strawberry.glb");

  return (
    <>
      {Array.from({ length: 500 }, (_, i) => {
        const position = [
          8000 * (2.0 * Math.random() - 1.0),
          8000 * (2.0 * Math.random() - 1.0),
          8000 * (2.0 * Math.random() - 1.0),
        ];

        const rotation = [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ];

        return (
          <mesh
            key={i}
            position={position}
            rotation={rotation}
            scale={[500, 500, 500]}
          >
            <primitive object={scene.clone()} />
          </mesh>
        );
      })}
    </>
  );
}
