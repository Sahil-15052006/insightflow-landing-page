import Gridbox from "../components/Gridbox"
import img1 from "../assets/smartDataProcessing.png"
import img2 from "../assets/automatedAnalytics.png"
import img3 from "../assets/interactiveVisuals.png"
import Imgbox from "../components/Imgbox"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"

function Features() {


  const titleArray = ['Smart Data Processing', 'Automated Analytics', 'Interactive Visuals']

  const shortInfoArray = [
    "Clean and organize raw datasets instantly.",
    "Generate insights without coding.",
    "Turn data into engaging visuals."
  ]

  const infoArray = [
    'Upload raw datasets and let InsightFlow automatically clean, organize and understand your data structure.',
    'Generate statistical summaries, comparisons and trends instantly without writing a single line of code.',
    'Transform raw datasets into interactive charts and visual reports that are easy to understand.'
  ]

  const [title, setTitle] = useState(titleArray[0])
  const [info, setInfo] = useState(infoArray[0])

  return (
    <div
      className="grid lg:grid-cols-2 min-h-screen w-full justify-center items-center ">
      <div className="transition-all">
        <div className="font-orbitron h-full w-fit font-orbitron-700 text-3xl sm:text-6xl lg:text-7xl text-(--primary) flex flex-wrap justify-center items-center p-3">
          Insightflow Features
        </div>
        <div className="hidden sm:block font-space-grotesk px-5 space-y-3">
          <div className="font-bold text-xl sm:text-2xl lg:text-4xl transition-all">
            <TypeAnimation
              key={title}
              sequence={[title]}
              repeat={0}
              speed={50}
              cursor={false}
            />
          </div>
          <div className="text-sm sm:text-lg lg:text-xl transition-all text-gray-300">
            <TypeAnimation
              key={info}
              sequence={[info]}
              repeat={0}
              speed={60}
              cursor={false}
            />
          </div>
        </div>

      </div>
      <div className="font-space-grotesk w-full h-fit flex justify-center items-center">
        <div
          className="grid grid-rows-3 w-full h-fit ">
          <div
            onMouseEnter={() => {
              setTitle(titleArray[0])
              setInfo(infoArray[0])
            }}
            className=" grid grid-cols-1 sm:grid-cols-2 h-fit group">
            <Gridbox
              title={titleArray[0]}
              point={1}
              info={shortInfoArray[0]}
            />
            <Imgbox img={img1} />
          </div>
          <div
            onMouseEnter={() => {
              setTitle(titleArray[1])  
              setInfo(infoArray[1])
            }}
            className="sm:hidden grid grid-cols-1 sm:grid-cols-2 h-fit group">
            <Gridbox
              title={titleArray[1]}
              point={2}
              info={shortInfoArray[1]}
            />
            <Imgbox img={img2} />
          </div>
          <div
            onMouseEnter={() => {
              setTitle(titleArray[1])  
              setInfo(infoArray[1])
            }}
            className="hidden sm:grid grid-cols-1 sm:grid-cols-2 h-fit group">
            <Imgbox img={img2} />
            <Gridbox
              title={titleArray[1]}
              point={2}
              info={shortInfoArray[1]}
            />
          </div>
          <div
            onMouseEnter={() => {
              setTitle(titleArray[2])
              setInfo(infoArray[2])
            }}
            className=" grid grid-cols-1 sm:grid-cols-2 h-fit group">
            <Gridbox
              title={titleArray[2]}
              point={3}
              info={shortInfoArray[2]}
            />
            <Imgbox img={img3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features