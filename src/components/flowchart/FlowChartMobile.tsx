

import { ArrowBigDown } from "lucide-react";
import Mainbox from "./Mainbox";

export default function FlowChartMobile() {
  return (
    <>

      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-10">

        <div id="upload" className="fade">
          <Mainbox prop="User uploads CSV / XLSX" />
        </div>

        <ArrowBigDown className="text-(--primary) fill-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade "/>

        <div className="backdrop-blur-lg border border-(--primary)/40 bg-(--primary)/5 rounded-3xl px-10 py-12 flex flex-col items-center gap-5 relative">

          <h2 className="absolute -top-5 px-6 py-2 rounded-full bg-black border border-(--primary) text-(--primary) font-orbitron text-sm tracking-widest fade">
            BACKEND
          </h2>

          <div id="detect" className="fade">
            <Mainbox prop="Detecting Structure" />
          </div>

          <ArrowBigDown className="text-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade "/>

          <div id="convert" className="fade">
            <Mainbox prop="Converting Structure" />
          </div>

          <ArrowBigDown className="text-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade"/>

          <div id="clean" className="fade">
            <Mainbox prop="Cleaning" />
          </div>

          <ArrowBigDown className="text-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade"/>

          <div id="insights" className="fade">
            <Mainbox prop="Generating Insights and Chart" />
          </div>

        </div>

        <ArrowBigDown className="text-(--primary) fill-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade"/>


        <div id="dashboard" className="fade">
          <Mainbox prop="User Dashboard and Insights" />
        </div>

      </div >

    </>
  )
}
