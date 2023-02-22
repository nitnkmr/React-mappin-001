import "./App.css";
import React from "react";
import Hello from "./Hello";


const numarray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function isprime(number) {
  if (number===0||number===1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const Numbers = ({ array }) => {
  const list = array.map((ele,i) => {
    if (isprime(ele)) {
      return <Hello  num={ele} i={i} color="#fd5e53"/>;
    } else {
      if (ele % 2 === 0) {
        return <Hello  num={ele} i={i}  color="#21bf73"/>;
      } else {
        return <Hello  num={ele} i={i}  color="#fddb3a"/>;
      }
    }
  });
  return list;
};

function App() {
  return (
    <div className="App">
      <div className="container">
          <Numbers array={numarray} />
      </div>  
    </div>
  );
}

export default App;