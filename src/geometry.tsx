import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import * as three from "three";
import Image from "./assets/image.png";
import { useFrame } from "@react-three/fiber";

const Geometry = () => {
  const texture = useTexture(Image);
  let ref = useRef<any | null>(null);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={ref}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          side={three.DoubleSide}
          map={texture}
          transparent={true}
        />
      </mesh>
    </group>
  );
};

export default Geometry;
