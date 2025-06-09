'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Octahedron, Icosahedron, Cylinder, Box } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

type ShapeProps = {
  geometry: typeof Sphere | typeof Torus | typeof Octahedron | typeof Icosahedron | typeof Cylinder | typeof Box;
  position: [number, number, number];
  color: string;
  scrollY: { get: () => number };
  scale?: number;
};

const Shape = ({ geometry: Geometry, position, color, scrollY, scale = 1 }: ShapeProps) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x = scrollY.get() * Math.PI * 2;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={4}>
      <mesh
        ref={mesh}
        position={position}
        scale={scale}
      >
        <Geometry />
        <meshPhongMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
};

const FooterShapes = () => {
  const { scrollY } = useScroll();
  
  const shapes = [
    { Comp: Sphere, pos: [-4, 2, 0] as [number, number, number], color: "#D5FDFF", scale: 0.5 },
    { Comp: Torus, pos: [4, -2, -2] as [number, number, number], color: "#9DE5FF", scale: 0.4 },
    { Comp: Octahedron, pos: [0, 3, -1] as [number, number, number], color: "#ACA8FF", scale: 0.6 },
    { Comp: Icosahedron, pos: [-3, -1, -3] as [number, number, number], color: "#AC73FF", scale: 0.5 },
    { Comp: Cylinder, pos: [3, 1, -2] as [number, number, number], color: "#D5FDFF", scale: 0.4 },
    { Comp: Box, pos: [-2, -3, -1] as [number, number, number], color: "#9DE5FF", scale: 0.5 },
    { Comp: Sphere, pos: [2, 2, -2] as [number, number, number], color: "#ACA8FF", scale: 0.3 }
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {shapes.map((shape, i) => (
          <Shape
            key={i}
            geometry={shape.Comp}
            position={shape.pos}
            color={shape.color}
            scrollY={scrollY}
            scale={shape.scale}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default FooterShapes;
