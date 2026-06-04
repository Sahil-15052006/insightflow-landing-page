import FlowChartDesktop from "../components/flowchart/FlowChartDesktop"
import FlowChartMobile from "../components/flowchart/FlowChartMobile"

function SystemArchitecture() {
  return (
    <section
      id="systemArchitecture"
      className="font-space-grotesk flex flex-col w-full min-h-screen justify-center items-start pt-20 gap-10"
    >
      <div className="flex flex-col gap-3">
        <p className="font-orbitron text-[11px] tracking-[4px] text-(--primary)/70 uppercase fade">
          How it works
        </p>
        <h1 className="font-orbitron font-bold text-3xl lg:text-6xl text-(--primary) fade">
          System Architecture
        </h1>
      </div>

      <div className="w-full">
        <div className="hidden lg:flex justify-center items-center w-full fade">
          <FlowChartDesktop />
        </div>
        <div className="lg:hidden fade">
          <FlowChartMobile />
        </div>
      </div>
    </section>
  )
}

export default SystemArchitecture
