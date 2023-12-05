import React, { useState } from 'react';
import './style.css';


const YourComponent = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}{num == 15 ? ' max' : num == 0 ? ' min' : ''}</h1>
      <button onClick={() => {
        if (num < 15) {
          setNum(num + 1);
        }
      }}>+</button>
      <button onClick={() => {
        if (num > 0) {
          setNum(num - 1);
        }
      }}>-</button>
      <div className="button-container">
        <button className="reset-button" onClick={() => { setNum(0); }}>reset</button>
      </div>
      <button onClick={() => {
        if (num + 5  <= 15) {
          setNum(num + 5);
        } else {
          setNum(15); 
        }
      }}>+5</button>
       <button onClick={() => {
        if (num - 5 >= 0) {
          setNum(num - 5);
        } else {
          setNum(0); 
        }
      }}>-5</button>
    </div>
  );
}



export default YourComponent;
