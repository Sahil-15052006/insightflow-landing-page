
import { ArrowBigRight } from "lucide-react";
import Mainbox from "./Mainbox";

export default function FlowChartDesktop() {
  return (

    <div className="w-full min-h-[70vh] flex flex-row items-center justify-center gap-5">


      <div id='upload' className="fade">
        <Mainbox prop="User uploads CSV / XLSX" />
      </div>


      <div className="backdrop-blur-lg relative min-h-80 border border-(--primary)/40 bg-(--primary)/5 rounded-3xl px-10 py-24 flex items-center fade">

      <ArrowBigRight className=" absolute -left-3 fill-(--primary) text-(--primary)  drop-shadow-[0_0_8px_var(--primary)] fade" />

        <h2 className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-black border border-(--primary)/40 text-(--primary) font-orbitron text-sm tracking-[0.3em] whitespace-nowrap fade">
          BACKEND
        </h2>


        <div className="flex items-center gap-3">

          <div id="detect" className="fade">
            <Mainbox prop="Detecting Structure" />
          </div>

          <ArrowBigRight className="text-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade" />

          <div id="convert" className="fade">
            <Mainbox prop="Converting Structure" />
          </div>

          <ArrowBigRight className="text-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade" />

          <div id="clean" className="fade">
            <Mainbox prop="Cleaning" />
          </div>

          <ArrowBigRight className="text-(--primary) drop-shadow-[0_0_8px_var(--primary)] fade" />

          <div id="insights" className="fade">
            <Mainbox prop="Generating Insights and hart" />
          </div>

          <ArrowBigRight className=" absolute -right-3 fill-(--primary) text-(--primary)  drop-shadow-[0_0_8px_var(--primary)] fade" />


        </div>
      </div>

      <div id="dashboard" className="fade">
        <Mainbox prop="User Dashboard and Insights" />
      </div>

    </div>

  );
}
