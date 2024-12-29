import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { DiscoBall } from './DiscoBall';

export function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <DiscoBall position={[0, 2, 0]} />
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#FFD700"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          envMapIntensity={2}
          emissive="#FFD700"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {Array.from({ length: 50 }).map((_, i) => (
        <Box
          key={i}
          args={[0.1, 0.1, 0.1]}
          position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
          ]}
        >
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.9}
            roughness={0.1}
            emissive="#FFD700"
            emissiveIntensity={0.2}
          />
        </Box>
      ))}
    </group>
  );
}