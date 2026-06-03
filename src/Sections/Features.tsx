import {  } from "lucide-react"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { IconDatabaseCog, IconChartDots, IconChartArea } from "@tabler/icons-react"

const features = [
  {
    num: "01",
    tag: "PROCESS",
    title: "Smart Data Processing",
    short: "Clean and organize raw datasets instantly.",
    desc: "Upload raw datasets and let InsightFlow automatically clean, organize and understand your data structure.",
    pills: ["CSV", "XLSX", "AUTO-CLEAN"],
    icon: IconDatabaseCog,
  },
  {
    num: "02",
    tag: "ANALYZE",
    title: "Automated Analytics",
    short: "Generate insights without writing a single line of code.",
    desc: "Generate statistical summaries, comparisons and trends instantly without writing a single line of code.",
    pills: ["TRENDS", "SUMMARIES", "NO-CODE"],
    icon: IconChartDots,
  },
  {
    num: "03",
    tag: "VISUALIZE",
    title: "Interactive Visuals",
    short: "Turn data into engaging visuals.",
    desc: "Transform raw datasets into interactive charts and visual reports that are easy to understand and share.",
    pills: ["CHARTS", "DASHBOARDS", "EXPORT"],
    icon: IconChartArea,
  },
]

function Features() {
  const [active, setActive] = useState(0)
  const current = features[active]

  return (
    <section
      id="features"
      className="font-space-grotesk grid min-h-screen w-full items-center gap-10 py-20 lg:py-24 "
    >
      {/* Header + animated description */}
      <div className="flex flex-col gap-4">
        <p className="font-orbitron text-[11px] tracking-[4px] text-(--primary)/70 uppercase fade">
          What we offer
        </p>

        <h2 className="font-orbitron text-5xl font-bold leading-tight text-white lg:text-6xl fade">
          Insightflow <span className="text-(--primary)">Features</span>
        </h2>

        <div className="mt-2 space-y-2">
          <p className="text-xl font-semibold text-white min-h-9 lg:text-2xl fade">
            <TypeAnimation
              key={current.title}
              sequence={[current.title]}
              repeat={0}
              speed={50}
              cursor={false}
            />
          </p>
          <p className="text-sm text-white/50 leading-relaxed max-w-lg min-h-20 lg:text-base fade">
            <TypeAnimation
              key={current.desc}
              sequence={[current.desc]}
              repeat={0}
              speed={60}
              cursor={false}
            />
          </p>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {features.map((f, i) => {
          const Icon=f.icon;
          return(
          <div
            key={f.title}
            onMouseEnter={() => setActive(i)}
            className={`
              relative flex flex-col gap-4 rounded-2xl border p-6
              cursor-pointer overflow-hidden transition-all duration-300 fade
              ${active === i
                ? "border-(--primary)/35 bg-(--primary)/7"
                : "border-white/5 bg-white/2 hover:border-(--primary)/20 hover:bg-(--primary)/4"
              }
            `}
          >
            {/* Left accent bar */}
            <div className={`
              absolute left-0 top-0 w-0.75 h-full rounded-l-2xl
              bg-linear-to-b from-purple-700 to-purple-500
              transition-opacity duration-300
              ${active === i ? "opacity-100" : "opacity-0"}
            `} />

            {/* Icon */}
            <div className={`
              w-14 h-14 rounded-xl flex items-center justify-center shrink-0
              border transition-all duration-300
              ${active === i
                ? "bg-(--primary)/20 border-(--primary)/50"
                : "bg-(--primary)/10 border-(--primary)/20"
              }
            `}>

             <Icon size={28} className="text-(--primary)" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1">
              <p className="font-orbitron text-[10px] tracking-[3px] text-(--primary)/60">
                {f.num} — {f.tag}
              </p>
              <p className="text-base font-semibold text-white">{f.title}</p>
              <p className="text-sm text-white/45 leading-relaxed">{f.short}</p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {f.pills.map((pill) => (
                <span
                  key={pill}
                  className="font-orbitron text-[10px] tracking-widest px-2.5 py-1 rounded-full border border-(--primary)/30 text-(--primary)/70"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Dot grid */}
            <div
              className="pointer-events-none absolute right-4 bottom-4 opacity-5 grid gap-1.25"
              style={{ gridTemplateColumns: "repeat(4, 6px)" }}
              aria-hidden="true"
            >
              {Array.from({ length: 12 }).map((_, j) => (
                <span key={j} className="w-1.5 h-1.5 rounded-full bg-(--primary) block" />
              ))}
            </div>
          </div>
        )})}
      </div>
    </section>
  )
}

export default Features
