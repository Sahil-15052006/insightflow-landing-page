import TorusArc from "./components/3dModal/TorusArc"
import {Canvas} from '@react-three/fiber'
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import DownloadPage from "./Sections/DownloadPage"
import Features from "./Sections/Features"
import Hero from "./Sections/Hero"
import SystemArchitecture from "./Sections/SystemArchitecture"
import CameraController from "./components/3dModal/CameraControl";
import { useRef } from "react";
import { useScroll } from "framer-motion";


function App() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <div className='relative h-screen w-full text-white overflow-x-hidden '>
        <div className="fixed top-0 left-0 right-0 w-full z-50 overflow-hidden">
          <Navbar/>
        </div>

        <div className="absolute left-0 z-5">
          <Sidebar/>
        </div>

        <div className="z-0 inset-0 absolute opacity-15 sm:opacity-10 ">
          <Canvas camera={{position:[0,0,10] , fov:75 } }>
            <CameraController scrollYProgress={scrollYProgress}/>
            <TorusArc/>
            <EffectComposer>
              <Bloom
                intensity={3}
                luminanceThreshold={0}
                luminanceSmoothing={1}
              />
            </EffectComposer>
          </Canvas>
        </div>


        <div
          ref={scrollRef}
          className="Screens flex-1 flex-col px-13 sm:px-25 py-5 h-screen w-full fixed items-center overflow-y-auto scroll-smooth scrollbar-none ">
              <Hero />
              <Features />
              <SystemArchitecture />
              <DownloadPage />
        </div>
      </div>
  )
}

export default App
