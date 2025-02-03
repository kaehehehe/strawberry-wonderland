import React, { useRef } from "react";
import { FlyControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function CameraControlsScene() {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.fov = 40;
      cameraRef.current.updateProjectionMatrix();
    }
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} />
      <FlyControls
        camera={cameraRef.current}
        movementSpeed={2500}
        rollSpeed={0.5}
        dragToLook={false}
      />
    </>
  );
}
