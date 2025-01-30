import React, { useRef } from "react";
import { Model } from "./Model";
import { FlyControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Scene() {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.fov = 40;
      cameraRef.current.updateProjectionMatrix();
    }
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        position={[0, 0, 250]}
        near={1}
        far={20000}
      />
      <Model />
      <FlyControls
        camera={cameraRef.current}
        movementSpeed={2500}
        rollSpeed={0.5}
        dragToLook={false}
      />
    </>
  );
}
