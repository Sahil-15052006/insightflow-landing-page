import { PanelTopCloseIcon, PanelTopOpenIcon } from "lucide-react";;
import { useState } from "react";
import { easeInOut, motion } from 'motion/react';

export default function MobileNav(){

    const [open,setOpen] = useState(false)

  return(
    <>
          <motion.div
            onClick={()=>setOpen(true)}
            className="sm:hidden justify-center items-center ">
            <PanelTopOpenIcon/>
          </motion.div>
          <motion.div
            initial={{y:-100}}
            animate={{
              display : open ? 'block' : 'none',
              y: open ? 0 : -100
            }}

            transition={{
              duration:0.1,
              ease:easeInOut
            }}
            className="sm:hidden bg-black w-full h-fit absolute top-0 right-0 z-10">
            <motion.div
            transition={{duration:0.3}}
            onTap={()=>setOpen(false)}
              className="w-full h-fit p-5 flex justify-end items-center ">
              <PanelTopCloseIcon/>
            </motion.div>
            <div
              onClick={()=>setOpen(false)}
              className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">
              <a href="#hero" className="scroll-smooth">Home</a>
            </div>
            <div
            onClick={()=>setOpen(false)}
            className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">
              <a href="#features" className="scroll-smooth">Feature</a>
            </div>
            <div
            onClick={()=>setOpen(false)}
             className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">
              <a href="#systemArchitecture" className="scroll-smooth">System Architecture</a>
            </div>
            <div
            onClick={()=>setOpen(false)}
            className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">
              <a href="#download" className="scroll-smooth">Download</a>
            </div>
          </motion.div>
    </>
  )
}
