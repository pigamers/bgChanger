import { useState } from 'react'

function App() {
  let [color, setColor] = useState("orange");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className='flex flex-wrap justify-center py-20'>
          <button type="button" className="text-white border-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 border-2 text-sm font-medium text-gray-900 bg-white rounded-full border-gray-200 hover:bg-gray-100 hover:text-blue-700" onClick={() => setColor("white")} style={{backgroundColor: "white"}}>White</button>
          <button type="button" className="text-white border-2 bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => setColor("black")} style={{backgroundColor: "black"}}>Black</button>
          <button type="button" className="text-white border-2 bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green</button>
          <button type="button" className="text-white border-2 bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => setColor("red")} style={{backgroundColor: "red"}}>Red</button>
          <button type="button" className="text-white border-2 bg-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
          <button type="button" className="text-white border-2 bg-purple-700 hover:bg-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2" onClick={() => setColor("purple")} style={{backgroundColor: "purple"}}>Purple</button>
        </div>

      </div>
    </>
  )
}

export default App
