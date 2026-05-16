
type divProps = {
    title:string,
    point:number,
    info:string,
}

function Gridbox({title,point,info}:divProps) {

  return (
    <div className="flex flex-col space-y-2 p-3 h-fit">
        <div className="text-xl font-bold font-orbitron flex justify-between items-center space-x-3">
          <div className="flex flex-wrap">{title}</div>
          <div className="text-4xl font-extrabold">{point}</div>
        </div>
        <div className="text-sm text-gray-500">{info}</div>
    </div>
  )
}

export default Gridbox