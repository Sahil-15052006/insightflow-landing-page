import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";

type props = {
  scrollYProgress: MotionValue<number>;
}

export default function CameraController({ scrollYProgress}: props) {

useFrame(({ camera }) => {
  const targetZ = 10 - scrollYProgress.get() * 10;
  camera.position.z +=
    (targetZ - camera.position.z) * 0.1;
});

  return null;
}
