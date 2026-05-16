import { ArcherContainer, ArcherElement } from "react-archer";
import Mainbox from "./Mainbox";

export default function FlowChartDesktop() {
  return (
    <ArcherContainer
      strokeColor="#00F5FF"
      lineStyle="straight"
    >
<div className="w-full min-h-[70vh] flex items-center justify-center gap-20">
        
        <ArcherElement
          id="upload-desktop"
          relations={[
            {
              targetId: "detect-desktop",
              sourceAnchor: "right",
              targetAnchor: "left",
            },
          ]}
        >
          <div>
            <Mainbox prop="User uploads CSV / XLSX" />
          </div>

        </ArcherElement>

<div className="relative min-h-[320px] border border-(--primary)/40 bg-(--primary)/5 rounded-3xl px-16 py-24 flex items-center">
          
          <h2 className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-black border border-(--primary)/40 text-(--primary) font-orbitron text-sm tracking-[0.3em] whitespace-nowrap">
            BACKEND
          </h2>

          
          <div className="flex items-center gap-10">

            
            <ArcherElement
              id="detect-desktop"
              relations={[
                {
                  targetId: "convert-desktop",
                  sourceAnchor: "right",
                  targetAnchor: "left",
                },
              ]}
            >
              <div>
                <Mainbox prop="Detecting Structure" />
              </div>
            </ArcherElement>

            
            <ArcherElement
              id="convert-desktop"
              relations={[
                {
                  targetId: "clean-desktop",
                  sourceAnchor: "right",
                  targetAnchor: "left",
                },
              ]}
            >
              <div>
                <Mainbox prop="Converting Structure" />
              </div>

            </ArcherElement>

            
            <ArcherElement
              id="clean-desktop"
              relations={[
                {
                  targetId: "insights-desktop",
                  sourceAnchor: "right",
                  targetAnchor: "left",
                },
              ]}
            >
              <div>
                <Mainbox prop="Cleaning" />
              </div>
            </ArcherElement>

            <ArcherElement
              id="insights-desktop"
              relations={[
                {
                  targetId: "dashboard-desktop",
                  sourceAnchor: "right",
                  targetAnchor: "left",
                },
              ]}
            >
              <div>
                <Mainbox prop="Generating Insights & Chart" />
              </div>
            </ArcherElement>

          </div>
        </div>

        {/* Dashboard */}
        <ArcherElement id="dashboard-desktop">
          <div>
            <Mainbox prop="User Dashboard & Insights" />
          </div>
        </ArcherElement>

      </div>
    </ArcherContainer>
  );
}