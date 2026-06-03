
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";



export default function Navbar() {


  return (

      <nav className="fixed top-0 left-0 right-0 z-50 justify-between min-w-0 flex p-2 sm:p-3">
        <div className="font-orbitron font-orbitron-700 text-3xl sm:text-4xl flex justify-center items-center py-3 px-5  ">
          <span className="text-(--primary)">INSIGHT</span>FLOW
        </div>
        <div className="flex flex-row space-x-3 sm:space-x-10 justify-between items-center font-space-grotesk text-[#ffffff]/80 js">
          <DesktopNav/>
          <MobileNav/>
        </div>
      </nav>

  )
}
