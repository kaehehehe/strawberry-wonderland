import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Fog() {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.Fog("#f5b5c3", 9000, 15000);

    return () => {
      scene.fog = null;
    };
  }, [scene]);

  return null;
}
