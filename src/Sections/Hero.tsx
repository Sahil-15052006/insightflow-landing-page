import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section
      id="hero"
      className="font-space-grotesk flex flex-col justify-end pb-20 sm:pb-5 sm:justify-center items-start h-screen gap-5"
    >
      <h1 className="font-orbitron font-bold text-4xl sm:text-6xl lg:text-8xl fade">
        INSIGHTFLOW
      </h1>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white/80 fade">
        A Data Analytics Mobile App
      </h2>

      <div className="h-px w-12 sm:w-20 bg-(--primary) fade" />

      <a
        href="#features"
        className="scroll-smooth group flex items-center gap-2 text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200 fade"
      >
        <span>Know more</span>
        <ArrowRight
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>

      <p className="max-w-xl text-base lg:text-lg leading-relaxed text-white/50 sm:self-end fade">
        InsightFlow is a data analytics platform that automates data cleaning,
        dashboard creation, and insight generation. Simply upload your CSV or
        XLSX file and receive structured analytics and visualizations in seconds.
      </p>
    </section>
  )
}

export default Hero
