import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value == "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (value == "c") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };
  return (
    <div className="border border-white p-4">
       
      <div className="flex items-center justify-center h-screen bg-black">
     
        <div className="text-white text-lg">
    
        <h1 className="-mt-36 mb-14 text-5xl text-white">My Calculator</h1> 
        
          <input
            className="mx-auto w-80 bg-black border border-white"
            name="input"
            value={input}
            type="string"
          />
          <p className="calculator-result text-orange-600">{result}</p>
          <div className="grid grid-cols-4">
            {[7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "c", 0, "=", "/"].map(
              (value) => (
                <button key={value} onClick={() => handleClick(value)}>
                  {value}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;


