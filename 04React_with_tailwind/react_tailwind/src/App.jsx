
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "black",
  ];

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Color Changer
          </h1>

          <p className="text-gray-600">
            Selected: <span className="font-bold">{color}</span>
          </p>
        </div>
      </nav>

      {/* Color Buttons */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
        <div className="bg-white px-4 py-3 rounded-2xl shadow-xl flex gap-3 flex-wrap justify-center">
          {colors.map((item) => (
            <button
              key={item}
              onClick={() => setColor(item)}
              className="px-5 py-2 rounded-full text-white font-semibold capitalize hover:scale-105 transition"
              style={{
                backgroundColor: item,
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

