import { ArrowRight, } from "lucide-react"
function Hero() {
  return (
    <div className="flex flex-col justify-end sm:justify-center w-full items-start min-h-screen text-start  font-space-grotesk space-y-3 transition-all">
        <div className="font-orbitron w-fit font-orbitron-700 text-3xl sm:text-6xl lg:text-8xl">INSIGHTFLOW</div>
        <div className=" w-fit text-2xl sm:text-4xl lg:text-6xl">A Data Analytics Mobile App</div>
        <hr className="bg-white w-10 sm:w-20"/>
        <div className="flex flex-row justify-center items-center w-fit text-[15px] space-x-2">
            <div>Know more</div>
            <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
            />
        </div>
        <div className=" grid sm:grid-cols-2 justify-center items-center ">
            <div>
            
            </div>
            <div className="text-[12px] sm:text-[15px] py-5 text-justify flex justify-end items-center leading-relaxed text-gray-300 ">
                Insightflow is a data analytics platform allows you to automate the process of data cleaning, dashboard creation and insight generation just by uploading the data file.
            </div>
        </div>
    </div>
  )
}

export default Hero