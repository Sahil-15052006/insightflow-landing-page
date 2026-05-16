import FlowChartDesktop from "../components/flowchart/FlowChartDesktop";
import FlowChartMobile from "../components/flowchart/FlowChartMobile";

function SystemArchitecture() {
  return (
    <div className="flex flex-col w-full min-h-screen py-10 font-space-grotesk items-center">
      <h1 className="font-orbitron text-left w-full font-bold text-3xl lg:text-6xl mb-10 text-[var(--primary)]">
        System Architecture
      </h1>
      <div className="lg:flex hidden justify-center items-center w-full h-full px-20">
        <FlowChartDesktop />
      </div>
      <div className="lg:hidden">
        <FlowChartMobile />
      </div>
    </div>
  );
}

export default SystemArchitecture;