import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";

/* =========================
   MODEL (SAFE SETUP)
========================= */
const Model = () => {
  const gltf = useGLTF(
    "/models/francisco/Campo-Verde-4-27-2025-textured_model.glb"
  );

  const scene = useMemo(() => {
    const cloned = gltf.scene.clone(true);

    cloned.rotation.x = -Math.PI / 2;
    cloned.scale.set(3, 3, 3);

    return cloned;
  }, [gltf]);

  return <primitive object={scene} />;
};

/* =========================
   CONTROLS WITH DAMPING FIX
========================= */
const Controls = () => {
  const controlsRef = useRef<any>();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update(); // 🔥 REQUIRED for damping
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      target={[0, 0, 0]}

      enablePan={true}
      enableZoom={true}
      enableRotate={true}

      enableDamping={true}
      dampingFactor={0.06}

      rotateSpeed={0.35}
      zoomSpeed={0.6}

      maxDistance={1200}
      minDistance={20}

      // 🔥 INSANE LEVEL CINEMATIC
      autoRotate={true}
      autoRotateSpeed={0.3}
    />
  );
};

/* =========================
   MAIN 3D VIEW
========================= */
const Drone3D = ({ fullscreen = false }: any) => {
  return (
    <div
      className={`w-full ${
        fullscreen ? "h-full" : "h-[300px]"
      } mt-4 rounded-lg overflow-hidden`}
    >
      <Canvas
        camera={{
          position: [0, 220, 350], // 🔥 PERFECT DISTANCE
          fov: 45,
        }}
        style={{ background: "#cfe8ff" }}
      >
        {/* LIGHTING */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[100, 120, 100]} intensity={1.5} />

        {/* GROUND */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeGeometry args={[1200, 1200]} />
          <meshStandardMaterial color="#dff5d8" />
        </mesh>

        {/* MODEL */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* CONTROLS */}
        <Controls />
      </Canvas>
    </div>
  );
};

export default Drone3D;

useGLTF.preload(
  "/models/francisco/Campo-Verde-4-27-2025-textured_model.glb"
);