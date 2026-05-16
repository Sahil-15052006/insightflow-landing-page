import { ArcherContainer, ArcherElement } from "react-archer";
import Mainbox from "./Mainbox";

export default function FlowChartMobile() {
    return (
        <>      
            <ArcherContainer
                    strokeColor="#00F5FF"
                    lineStyle="straight"
                  >
                    <div className="flex flex-col items-center gap-10">
            
                      {/* Upload */}
                      <ArcherElement
                        id="upload"
                        relations={[
                          {
                            targetId: "detect",
                            sourceAnchor: "bottom",
                            targetAnchor: "top",
                          },
                        ]}
                      >
                        <div>
                          <Mainbox prop="User uploads CSV / XLSX" />
                        </div>
                      </ArcherElement>
            
                      {/* Backend Wrapper */}
                      <div className="border border-[var(--primary)]/40 bg-[var(--primary)]/5 rounded-3xl px-10 py-12 flex flex-col items-center gap-10 relative">
            
                        {/* Backend Title */}
                        <h2 className="absolute -top-5 px-6 py-2 rounded-full bg-black border border-[var(--primary)] text-[var(--primary)] font-orbitron text-sm tracking-widest">
                          BACKEND
                        </h2>
            
                        {/* Detect */}
                        <ArcherElement
                          id="detect"
                          relations={[
                            {
                              targetId: "convert",
                              sourceAnchor: "bottom",
                              targetAnchor: "top",
                            },
                          ]}
                        >
                          <div>
                            <Mainbox prop="Detecting Structure" />
                          </div>
                        </ArcherElement>
            
                        {/* Convert */}
                        <ArcherElement
                          id="convert"
                          relations={[
                            {
                              targetId: "clean",
                              sourceAnchor: "bottom",
                              targetAnchor: "top",
                            },
                          ]}
                        >
                          <div>
                            <Mainbox prop="Converting Structure" />
                          </div>
                        </ArcherElement>
            
                        {/* Clean */}
                        <ArcherElement
                          id="clean"
                          relations={[
                            {
                              targetId: "insights",
                              sourceAnchor: "bottom",
                              targetAnchor: "top",
                            },
                          ]}
                        >
                          <div>
                            <Mainbox prop="Cleaning" />
                          </div>
                        </ArcherElement>
            
                        {/* Insights */}
                        <ArcherElement
                          id="insights"
                          relations={[
                            {
                              targetId: "dashboard",
                              sourceAnchor: "bottom",
                              targetAnchor: "top",
                            },
                          ]}
                        >
                          <div>
                            <Mainbox prop="Generating Insights & Chart" />
                          </div>
                        </ArcherElement>
                      </div>
            
                      {/* Dashboard */}
                      <ArcherElement id="dashboard">
                        <div>
                          <Mainbox prop="User Dashboard & Insights" />
                        </div>
                      </ArcherElement>
            
                    </div>
                  </ArcherContainer>
        </>
    )
}