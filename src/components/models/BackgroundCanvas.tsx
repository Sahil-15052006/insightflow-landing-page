import { Canvas } from "@react-three/fiber";
import DataScene from "./DataScene";

function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
      >
        <DataScene />
      </Canvas>
    </div>
  );
}

export default BackgroundCanvas;