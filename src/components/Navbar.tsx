import gsap from "gsap";
import { MenuIcon } from "lucide-react";;
import { useRef, useState } from "react";

export default function Navbar() {

  const [open,setOpen] = useState(false)
  const navRef = useRef(null)

  const handleNav=()=>{
    if(open===false){
      setOpen(!open)
      gsap.fromTo(navRef.current,
        {
          y:-200,
        },
        {
          y:0,
          opacity:1,
          duration:1, 
          ease:"power3.out",
        }
      )
    } else {
      gsap.to(navRef.current,
        {
          y:-200,
          opacity:0,
          duration:1, 
          ease:"power3.in",
          onComplete:()=>{
            setOpen(false)
          }
        }
      )
    }
  }

  return (
    <>
      <nav className="flex flex-row justify-between p-2 sm:p-3 fixed top-0 left-0 w-full z-50 transition-all">
        <div className="font-orbitron font-orbitron-700 px-3 sm:text-xl flex justify-center items-center ">
          <span className="text-(--primary)">INSIGHT</span>FLOW
        </div>
        <div className="flex flex-row space-x-3 sm:space-x-10 justify-around items-center font-space-grotesk text-[#ffffff]/80 ">
          <div className="hidden sm:flex flex-row space-x-3 sm:space-x-10 justify-around items-center font-space-grotesk ">
            <div>Home</div>
            <div>Feature</div>
            <div>System Architecture</div>
            <button className="border border-[#ffffff]/80 bg-transparent p-1 sm:p-3">Download</button>
          </div>
          <div 
            onClick={handleNav}
            className="sm:hidden justify-center items-center ">
            <MenuIcon/>
          </div>
          <div 
            ref={navRef}
            className={`${open?`block`:`hidden`} sm:hidden bg-black w-screen h-fit absolute top-0 right-0 opacity-0 grid grid-rows z-10 `}>
            <div 
              onClick={handleNav}
              className="w-full h-fit px-5 py-2 flex justify-end items-center">
              <MenuIcon/>
            </div>
            <div className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">Home</div>
            <div className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">Feature</div>
            <div className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">System Architecture</div>
            <div className="w-full h-fit p-3 flex justify-center items-center hover:bg-white hover:text-black duration-300 transition">Download</div>
          </div>
        </div>
      </nav>
    </>
  )
}
