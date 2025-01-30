import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FallingModel } from "./components/FallingModel";
import "./styles.css";

const modelCount = 150;

export default function App() {
  const models = Array.from({ length: modelCount }).map(() => {
    const initialY = Math.random() * 10 + 10;
    const speed = Math.random() * 0.03 + 0.01;
    const delay = Math.random() * 2;
    return {
      position: [
        (Math.random() - 0.5) * 10,
        initialY,
        (Math.random() - 0.5) * 10,
      ],
      speed,
      delay,
    };
  });

  return (
    <Canvas camera={{ fov: 45, position: [0, 0, 10], near: 1, far: 100 }}>
      <OrbitControls minDistance={5} maxDistance={10} />
      <ambientLight intensity={0.5} />
      <Environment preset="apartment" />
      {models.map(({ position, speed, delay }, i) => (
        <FallingModel
          key={i}
          initialPosition={position}
          speed={speed}
          delay={delay}
        />
      ))}
    </Canvas>
  );
}
