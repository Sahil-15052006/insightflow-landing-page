
function Sidebar() {
  return (
    <>
        <aside className="absolute top-0 left-0 w-fit h-screen grid grid-rows-3 justify-center items-center text-(--primary) sm:py-5 transition-all font-space-grotesk ">
            <div className="rotate-270 animate-pulse transition-all duration-100 sm:p-5">Clean</div>
            <div className="rotate-270 animate-pulse transition-all duration-100 sm:p-5">Analyze</div>
            <div className="rotate-270 animate-pulse transition-all duration-100 sm:p-5">Visualize</div>
        </aside>
    </>
  )
}

export default Sidebar
