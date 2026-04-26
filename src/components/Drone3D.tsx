import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useMemo } from "react";

/* =========================
   MODEL COMPONENT (DYNAMIC)
========================= */
const Model = ({ modelType = "basic" }: { modelType?: "basic" | "advanced" }) => {
  // ✅ SWITCH BETWEEN BASIC AND ADVANCED MODEL
  const modelPath =
    modelType === "advanced"
      ? "/models/francisco/francisco_advanced.glb" // 🔥 YOUR NEW MODEL
      : "/models/francisco/Campo-Verde-4-27-2025-textured_model.glb"; // EXISTING

  const gltf = useGLTF(modelPath);

  // ✅ Clone to avoid mutation issues (VERY IMPORTANT)
  const scene = useMemo(() => gltf.scene.clone(true), [gltf]);

  // ✅ FIX ORIENTATION (from CloudCompare)
  scene.rotation.x = -Math.PI / 2;

  // ✅ SCALE (adjust if needed)
  scene.scale.set(3, 3, 3);

  return <primitive object={scene} />;
};

/* =========================
   MAIN 3D VIEW
========================= */
const Drone3D = ({
  fullscreen = false,
  model = "basic", // 🔥 NEW PROP (basic | advanced)
}: {
  fullscreen?: boolean;
  model?: "basic" | "advanced";
}) => {
  return (
    <div
      className={`w-full ${
        fullscreen ? "h-full" : "h-[300px]"
      } mt-4 rounded-lg overflow-hidden`}
    >
      <Canvas
        camera={{
          position: [0, 150, 250],
          fov: 45,
        }}
        style={{ background: "#0b1d2a" }} // 🔥 DARK CINEMATIC BACKGROUND
      >
        {/* =========================
            LIGHTING (IMPROVED)
        ========================== */}

        {/* Soft global light */}
        <ambientLight intensity={0.8} />

        {/* Sun light */}
        <directionalLight
          position={[100, 150, 100]}
          intensity={1.5}
          castShadow
        />

        {/* Fill light (reduces harsh shadows) */}
        <directionalLight
          position={[-80, 80, -80]}
          intensity={0.6}
        />

        {/* Environment lighting (REALISM BOOST) */}
        <Environment preset="forest" />

        {/* =========================
            GROUND (SUBTLE)
        ========================== */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[1000, 1000]} />
          <meshStandardMaterial color="#1a2e1a" />
        </mesh>

        {/* =========================
            MODEL
        ========================== */}
        <Suspense fallback={null}>
          <Model modelType={model} />
        </Suspense>

        {/* =========================
            CONTROLS (CINEMATIC)
        ========================== */}
        <OrbitControls
          target={[0, 0, 0]}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.08}

          // 🔥 CINEMATIC AUTO ROTATION
          autoRotate={model === "advanced"} // only for advanced view
          autoRotateSpeed={0.4}

          rotateSpeed={0.4}
          zoomSpeed={0.6}

          minDistance={20}
          maxDistance={800}
        />
      </Canvas>
    </div>
  );
};

export default Drone3D;

/* =========================
   PRELOAD (PERFORMANCE BOOST)
========================= */
useGLTF.preload(
  "/models/francisco/Campo-Verde-4-27-2025-textured_model.glb"
);

useGLTF.preload(
  "/models/francisco/francisco_advanced.glb"
);