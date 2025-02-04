import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { StrawberryField } from "./components/StrawberryField";
import { CameraControlsScene } from "./components/CameraControlsScene";
import { Fog } from "./components/Fog";
import "./styles.css";

export default function App() {
  return (
    <Canvas
      camera={{
        fov: 40,
        aspect: window.innerWidth / window.innerHeight,
        near: 1,
        far: 15000,
        position: [0, 0, 250],
      }}
    >
      <Fog />
      <ambientLight intensity={0.5} />
      <Environment preset="lobby" />
      <StrawberryField />
      <CameraControlsScene />
    </Canvas>
  );
}
