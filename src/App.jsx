import { useState } from "react"

function App() {

  const [color, setcolor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0" >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
              onClick={() => setcolor("red")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setcolor("green")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setcolor("yellow")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "yellow" }}
            >
              Yallow
            </button>
            <button
              onClick={() => setcolor("Brown")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "Brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setcolor("Orange")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setcolor("Pink")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setcolor("Purple")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "Purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setcolor("Gray")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "Gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setcolor("Black")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg hover:target"
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
            <button
              onClick={() => setcolor("White")}
              className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg hover:target"
              style={{ backgroundColor: "White" }}
            >
              White
            </button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
