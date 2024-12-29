import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene3D } from '../3d/Scene3D';

export function FutureSection() {
  return (
    <div className="h-screen relative">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            The Future of Nightlife
          </h2>
          <p className="text-xl text-gray-300">
            Where luxury meets technology
          </p>
        </div>
      </div>
    </div>
  );
}