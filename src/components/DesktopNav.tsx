import {easeInOut, motion } from 'motion/react';


export default function DesktopNav(){
  return(
    <motion.div
      className="hidden sm:flex flex-row space-x-3 sm:space-x-10 justify-around items-center font-space-grotesk text-white">

            <motion.a
              whileHover={{
                color:'#637daa'
              }}
              whileTap={{
                color:'#637daa',
                scale:0.9
              }}
              transition={{
                duration:0.3,
                ease:easeInOut
              }}
              href="#hero"
              className="scroll-smooth">Home</motion.a>

            <motion.a
              whileHover={{
                color:'#637daa'
              }}
              whileTap={{
                color:'#637daa',
                scale:0.9
              }}
              transition={{
                duration:0.3,
                ease:easeInOut
              }}
              href="#features"
              className="scroll-smooth">Feature</motion.a>

            <motion.a
              whileHover={{
                color:'#637daa'
              }}
              whileTap={{
                color:'#637daa',
                scale:0.9
              }}
              transition={{
                duration:0.3,
                ease:easeInOut
              }} href="#systemArchitecture" className="scroll-smooth">System Architecture</motion.a>

            <motion.a
              layout
              whileHover={{
                background:'#637daa',
                color:'#000000',
                borderColor:'#637daa',

              }}
              whileTap={{
                background:'#637daa',
                color:'#000000',
                borderColor:'#637daa',
                scale:0.9
              }}
              transition={{
                duration:0.5,
                ease:easeInOut
              }}
              href="#download"
              className="scroll-smooth border border-(--primary) bg-(--primary)/20 p-1 sm:p-3 text-(--primary) tracking-normal rounded font-semibold"
              >Download</motion.a>
    </motion.div>
  )
}
