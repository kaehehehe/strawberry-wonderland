import { useGLTF } from "@react-three/drei";
import React from "react";

export function CreateStrawberry({ color, position, rotation }) {
  const { scene } = useGLTF("strawberry.glb");
  const model = scene.clone();

  model.traverse(({ children }) => {
    if (color === "red" || children.length === 0) return;

    const [stem, fruit] = children;

    stem.material = stem.material.clone();
    stem.material.color.set("#6fa54c");

    fruit.material = fruit.material.clone();
    fruit.material.color.set("#e4748a");
  });

  return (
    <mesh position={position} rotation={rotation} scale={[500, 500, 500]}>
      <primitive object={model} />
    </mesh>
  );
}
