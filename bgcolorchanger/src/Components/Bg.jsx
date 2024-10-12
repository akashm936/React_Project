import {useState} from 'react'


function Bg() {

  const [color, setColor] = useState("white")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
       
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "red"}} onClick={()=>{setColor("red")}}>Red</button>
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "purple"}} onClick={()=>{setColor("purple")}}>purple</button>
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "blue"}} onClick={()=>{setColor("blue")}}>blue</button>
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "green"}} onClick={()=>{setColor("green")}}>green</button>
       <button className=' border-black outline-none px-5 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:  "white"}} onClick={()=>{setColor("white")}}>white</button>
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "black"}} onClick={()=>{setColor("black")}}>black</button>
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "yellow"}} onClick={()=>{setColor("yellow")}}>yellow</button>
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "skyblue"}} onClick={()=>{setColor("skyblue")}}>skyblue</button>
       <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:  "pink"}} onClick={()=>{setColor("pink")}}>pink</button>
      </div>
    </div>
    </div>
    {/* // <div className=''>
    // <div className=''>
    //         <button className=' p-3 m-1 rounded-xl bg-red-600'>Red</button>
    //         <button className=' p-3 m-1 rounded-xl bg-green-600' >Green</button>
    //         <button className=' p-3 m-1 rounded-xl bg-blue-600' >Blue</button>
    //         <button className=' p-3 m-1 rounded-xl bg-orange-600' >Orange</button>
    //         <button className=' p-3 m-1 rounded-xl bg-purple-600' >Purple</button>
    //         <button className=' p-3 m-1 rounded-xl bg-yellow-600' >Yellow</button>
    //         <button className=' p-3 border-solid border-2 border-black m-1 rounded-xl bg-white text-black' >White</button>
    //         <button className=' p-3 m-1 rounded-xl bg-black text-white' >Black</button>
    //     </div>
    // </div> */}
        
    </>
  )
}

export default Bg