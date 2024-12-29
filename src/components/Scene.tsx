import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
    if (boxesRef.current) {
      boxesRef.current.rotation.y += 0.005;
      boxesRef.current.children.forEach((box, i) => {
        box.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5;
      });
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <color attach="background" args={['#000000']} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#FFD700" />

      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
          emissive="#FFD700"
          emissiveIntensity={0.2}
        />
      </Sphere>

      <group ref={boxesRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.2, 0.2]}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 2,
              0,
              Math.sin((i / 8) * Math.PI * 2) * 2,
            ]}
          >
            <meshStandardMaterial
              color="#FFD700"
              metalness={0.8}
              roughness={0.2}
              emissive="#FFD700"
              emissiveIntensity={0.1}
            />
          </Box>
        ))}
      </group>

      <Environment preset="night" />
    </>
  );
}