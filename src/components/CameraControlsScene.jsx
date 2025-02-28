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
      <perspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={40}
        aspect={window.innerWidth / window.innerHeight}
        near={1}
        far={15000}
        position={[0, 0, 250]}
      />
      <FlyControls
        camera={cameraRef.current}
        movementSpeed={2500}
        rollSpeed={0.1}
        dragToLook={false}
      />
    </>
  );
}
