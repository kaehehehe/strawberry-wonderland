import React from "react";
import { CreateStrawberry } from "./CreateStrawberry";

export function StrawberryField() {
  const strawberries = [
    ...Array.from({ length: 900 }, () => "red"),
    ...Array.from({ length: 300 }, () => "pink"),
  ];

  return (
    <>
      {strawberries.map((color, i) => {
        const position = [
          8000 * (2.0 * Math.random() - 1.0), // -8000 ~ 8000
          8000 * (2.0 * Math.random() - 1.0), // -8000 ~ 8000
          8000 * (2.0 * Math.random() - 1.0), // -8000 ~ 8000
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
