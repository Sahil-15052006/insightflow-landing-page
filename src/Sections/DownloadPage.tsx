import mobile from '../assets/mobile.png'
import video from '../assets/video.mp4'

export default function DownloadPage() {
  return (
    <section
      id="download"
      className="font-space-grotesk flex flex-col w-full min-h-screen justify-center items-center py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 w-full items-center">

        {/* Text */}
        <div className="flex flex-col items-start gap-5">
          <p className="font-orbitron text-[11px] tracking-[4px] text-(--primary)/70 uppercase fade">
            Get the app
          </p>

          <h1 className="font-orbitron font-bold text-3xl lg:text-6xl text-(--primary) fade">
            Download Our App
          </h1>

          <h2 className="font-orbitron font-bold text-3xl lg:text-5xl text-white fade">
            Download for Android
          </h2>

          <p className="text-white/45 leading-relaxed fade">
            Download the latest version of the app.
          </p>

          <a
            href="https://drive.google.com/file/d/10wPvDAhIkcZzBlPE-ENsMZdFqRPW_c7J/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="fade bg-(--primary)/10 border border-(--primary)/40 hover:bg-(--primary) hover:text-[#000000] text-(--primary) font-semibold px-6 py-2.5 rounded transition-all duration-300"
          >
            Download
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center fade">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="absolute h-100 w-auto object-contain rounded-2xl"
          />


          <img src={mobile} alt="InsightFlow mobile app" className="h-120 w-auto object-contain overflow-hidden z-2" />
        </div>

      </div>
    </section>
  )
}
