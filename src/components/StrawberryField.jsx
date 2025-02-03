import React from "react";
import { CreateStrawberry } from "./CreateStrawberry";

export function StrawberryField() {
  const strawberries = [
    ...Array.from({ length: 350 }, () => "red"),
    ...Array.from({ length: 150 }, () => "pink"),
  ];

  return (
    <>
      {strawberries.map((color, i) => {
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
          <CreateStrawberry
            key={i}
            color={color}
            position={position}
            rotation={rotation}
          />
        );
      })}
    </>
  );
}
