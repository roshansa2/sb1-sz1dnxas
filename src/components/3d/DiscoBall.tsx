import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface DiscoBallProps {
  position?: [number, number, number];
}

export function DiscoBall({ position = [0, 0, 0] }: DiscoBallProps) {
  const discoBallRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (discoBallRef.current) {
      discoBallRef.current.rotation.y += 0.01;
      discoBallRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={discoBallRef} args={[0.8, 64, 64]} position={position}>
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={1}
        roughness={0}
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={1}
        envMapIntensity={2}
      >
        <meshStandardMaterial
          color="#ffffff"
          metalness={1}
          roughness={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </meshPhysicalMaterial>
    </Sphere>
  );
}