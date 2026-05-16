import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import DownloadPage from "./Sections/DownloadPage"
import Features from "./Sections/Features"
import Hero from "./Sections/Hero"
import SystemArchitecture from "./Sections/SystemArchitecture"


function App() {

  return (
   <div className='relative bgScreen h-screen w-screen text-white overflow-hidden '>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar/>
      </div>
      <div className="absolute left-0">
        <Sidebar/>
      </div>
      <div className="Screens flex-1 flex-col px-13 sm:px-25 h-screen w-full fixed items-center overflow-y-auto scroll-smooth ">
          <Hero/>
          <Features/>
          <SystemArchitecture/>
          <DownloadPage/>
      </div>
    </div>
  )
}

export default App
