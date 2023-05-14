import "./ButtonWrrper.css";

import CalBtn from "../CalBtn/CalBtn";
import { useState } from "react";

const ButtonWrrper = (props) => {
  const [inputeExp, setInputExp] = useState(0);
  const [cuurentAdd, setcuurentAdd] = useState("");

  const [currentOutPut, setcurrentOutPut] = useState();

  let array1 = [
    {
      val: 1,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 101,
    },

    {
      val: 2,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 102,
    },

    {
      val: 3,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 103,
    },

    {
      val: 4,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 104,
    },

    {
      val: 5,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 105,
    },

    {
      val: 6,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 106,
    },

    {
      val: 7,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 107,
    },

    {
      val: 8,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 108,
    },

    {
      val: 9,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 109,
    },

    {
      val: 0,
      func: (value) => {
        console.log("value", value);
        setInputExp((prve) => {
          setcurrentOutPut(prve + value);
          const retval = inputeExp === 0 ? value : `${inputeExp}` + value;
          return retval;
        });
      },
      id: 100,
    },
  ];

  let array2 = [
    {
      val: "+",
      func: (value) => {
        console.log("value", value);
        setcurrentOutPut(inputeExp);
        setInputExp(0);
        setcuurentAdd(value);
      },
      id: "+",
    },

    {
      val: "-",
      func: (value) => {
        console.log("value", value);
        setcurrentOutPut(inputeExp);
        setInputExp(0);
        setcuurentAdd(value);
      },
      id: "-",
    },

    {
      val: "*",
      func: (value) => {
        console.log("value", value);
        setcurrentOutPut(inputeExp);
        setInputExp(0);
        setcuurentAdd(value);
      },
      id: "*",
    },

    {
      val: "%",
      func: (value) => {
        console.log("value", value);
        setcurrentOutPut(inputeExp);
        setInputExp(0);
        setcuurentAdd(value);
      },
      id: "%",
    },

    {
      val: "=",
      func: (value) => {
        console.log("value", value);
        setcuurentAdd(value);
        if (cuurentAdd == "+") {
          setInputExp(inputeExp + parseInt(currentOutPut));
        } else if (cuurentAdd == "-") {
          setInputExp(inputeExp - parseInt(currentOutPut));
        } else if (cuurentAdd == "*") {
          setInputExp(inputeExp * parseInt(currentOutPut));
        } else if (cuurentAdd == "%") {
          setInputExp(inputeExp % parseInt(currentOutPut));
        } else if (cuurentAdd == "/") {
          setInputExp(inputeExp * parseInt(currentOutPut));
        }
      },
    },
  ];

  let buttonArrsy = array1.map((btn) => {
    return <CalBtn textButn={btn.val} onClickExp={btn.func} id={btn.id} />;
  });
  let buttonArrsy2 = array2.map((opBtn) => {
    return (
      <CalBtn textButn={opBtn.val} onClickExp={opBtn.func} id={opBtn.id} />
    );
  });

  return (
    <>
      <div className="main-cont">
        <input
          type="number"
          id="inputNmae"
          value={inputeExp}
          onChange={(event) => {
            setInputExp(event.target.value);
          }}
        ></input>
        <br></br>
        {buttonArrsy}
        <br></br>
        {buttonArrsy2}
      </div>
    </>
  );
};

export default ButtonWrrper;
