import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model() {
  const { scene: red } = useGLTF("strawberry.glb");
  const { scene: pink } = useGLTF("strawberry-pink.glb");

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

        const model = Math.random() < 0.5 ? red : pink;

        return (
          <mesh
            key={i}
            position={position}
            rotation={rotation}
            scale={[500, 500, 500]}
          >
            <primitive object={model.clone()} />
          </mesh>
        );
      })}
    </>
  );
}
