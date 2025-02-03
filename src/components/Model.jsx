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

        const isPink = Math.random() < 0.5;
        const model = scene.clone();

        if (isPink) {
          model.traverse(({ children }) => {
            if (children.length === 0) return;

            const [stem, fruit] = children;
            stem.material = stem.material.clone();
            stem.material.color.set("#6fa54c");

            fruit.material = fruit.material.clone();
            fruit.material.color.set("#e4748a");
          });
        }

        return (
          <mesh
            key={i}
            position={position}
            rotation={rotation}
            scale={[500, 500, 500]}
          >
            <primitive object={model} />
          </mesh>
        );
      })}
    </>
  );
}
