import React, { useState } from "react";
import InputField from "react";

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
    }else if(value=='c'){
        setInput('')
        setResult('')
    }else{
        setInput(input+value)
    }
  };
  return (
    <div className="border border-white p-4">
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white text-lg ">
          <input className="mx-auto bg-black border border-white" name="input" value={input} type="string" />
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
