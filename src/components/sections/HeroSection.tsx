import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene3D } from '../3d/Scene3D';
import { HeroContent } from '../HeroContent';

export function HeroSection() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-4">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>
      <HeroContent />
    </div>
  );
}