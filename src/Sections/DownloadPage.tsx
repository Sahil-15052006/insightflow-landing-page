export default function DownloadPage() {
  return (
    <div className="flex flex-col w-full min-h-screen py-10 font-space-grotesk items-center">
        <h1 className="font-orbitron text-left w-full font-bold text-3xl lg:text-6xl mb-10 text-[var(--primary)]">
            Download Insightflow 
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
                <h2 className="font-grotesk-space text-left w-full font-bold text-3xl lg:text-6xl mb-10 text-white">Download for Android</h2>
                <p className="text-left w-full text-gray-500">Download the latest version of the app.</p>
                <button className="bg-(--primary) text-white px-4 py-2 rounded-md">Download</button>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}