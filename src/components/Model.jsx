import { useGLTF } from "@react-three/drei";
import React, { forwardRef } from "react";

export const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("strawberry.glb");

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene.clone()} scale={[1, 1, 1]} />
    </mesh>
  );
});
