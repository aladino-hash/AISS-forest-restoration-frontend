import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Sky,
  useGLTF,
} from "@react-three/drei";

import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  visualizationMode: "current" | "future";
};

function FranciscoModel() {
  const { scene } = useGLTF(
    "/models/francisco/Campo-Verde-4-27-2025-textured_model.glb"
  );

  const group = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (!group.current) return;

    const box = new THREE.Box3().setFromObject(group.current);

    const center = new THREE.Vector3();
    box.getCenter(center);

    group.current.position.x -= center.x;
    group.current.position.y -= center.y;
    group.current.position.z -= center.z;
  }, []);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

function AutoCamera() {
  const { camera, scene } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);

    const center = new THREE.Vector3();
    const size = new THREE.Vector3();

    box.getCenter(center);
    box.getSize(size);

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    camera.position.set(
      center.x + maxDimension * 1.6,
      center.y + maxDimension * 0.9,
      center.z + maxDimension * 1.6
    );

    camera.lookAt(center);
  }, [camera, scene]);

  return null;
}

function FutureRestorationOverlay() {
  return (
    <group>

      {/* Priority Restoration Zone */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.4, 0]}
      >
        <circleGeometry args={[70, 80]} />

        <meshBasicMaterial
          color="#22c55e"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* AI Core */}

      <mesh position={[0, 8, 0]}>
        <sphereGeometry args={[2, 32, 32]} />

        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={3}
        />
      </mesh>

    </group>
  );
}

export default function ThreeDViewer({
  visualizationMode,
}: Props) {
  return (
    <div className="h-full w-full bg-sky-200">

      <Canvas
        camera={{
          position: [180, 120, 180],
          fov: 50,
          near: 0.1,
          far: 5000,
        }}
      >
        <Sky
          distance={450000}
          sunPosition={[5, 2, 8]}
          inclination={0.5}
          azimuth={0.25}
        />

        <ambientLight intensity={0.8} />

        <hemisphereLight
          intensity={0.9}
          groundColor="#4d5b3a"
          color="#dceeff"
        />

        <directionalLight
          position={[100, 200, 100]}
          intensity={2.2}
          castShadow
        />

        <AutoCamera />

        <Environment preset="forest" />

        <FranciscoModel />

        {visualizationMode === "future" && (
          <FutureRestorationOverlay />
        )}

        <OrbitControls
          makeDefault
          target={[0, 20, 0]}
          enablePan
          enableZoom
          enableRotate
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
          zoomSpeed={0.8}
          panSpeed={0.8}
          minDistance={40}
          maxDistance={600}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
      </Canvas>

    </div>
  );
}