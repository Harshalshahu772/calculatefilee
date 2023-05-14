import React, { useState } from "react";

let Calculater = () => {
  let [isVisible, setIsVisible] = useState(true);

  let spanTag = "";
  // let isVisible  = true;

  isVisible ? (spanTag = "it is the true ") : (spanTag = "it is false");

  let changeisable = () => {
 
    setIsVisible(!isVisible);

  };

  return (
    <div>
      {spanTag}

      <>
        <br></br>
        <br></br>
      </>
      <button onClick={changeisable}>changeisable</button>
    </div>
  );
};

export default Calculater;

// import Multi from "../Opreation/Multi.js";
// import Div from "../Opreation/Div.js";
// import Add from "../Opreation/Add.js";

// <div>
// <Multi p1={p1} p2={p2} />

// <br></br>

// <Div p1={p1} p2={p2} />

// <br></br>

// <Add />
// </div>
