
function Imgbox({img}:any) {
  return (
     <div className="h-fit w-full flex justify-center items-center overflow-hidden rounded">
        <img src={img} alt="" className="group-hover:scale-105 duration-500 transition-all" />
    </div>
  )
}
export default Imgbox