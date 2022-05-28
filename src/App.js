import './App.css'
import React, {useState} from 'react';
// import Caculator from "./component/caculator";

function App() {
    const [number1,setNumber1]  = useState("");
    const [number2,setNumber2]  = useState("");
    const [current,setCurrent]  = useState("");
    const [previous,setPrevious] = useState(0);
    const clickNumber = (child) => {
        if (current === ""){
            setNumber1(number1+ child);
        }else{
            setNumber2(number2 + child)
        }

    }
    const clickSign = (parent) =>{
        setCurrent(parent)

    }
    const  Clear = () =>{
        setCurrent("");
        setNumber2("");
        setNumber1("");
        setPrevious(null);
    }
    const Delete = () => {

    }
    const getPerious = () =>{
        switch (current){
            case "+":
                setPrevious(Number(number1)+ Number(number2));
                break;
            case "-":
                setPrevious(Number(number1)- Number(number2));
                break;
            case "*":
                setPrevious(Number(number1) * Number(number2));
                break;
            case "/":
                setPrevious(Number(number1) / Number(number2));
                break;
            default:
        }

    }
  return (
    <div className={'App'}>
      <div className={'caculator'}>
            <div className={'output'}>
                <div className={'previous'}>
                    {current ? number1+current:""}
                </div>
                <div className={'current'}>
                    {previous ?  previous :(!current ? number1 : number2)}
                </div>
            </div>

                  <button onClick={()=>{Clear()}} className={'span-two'}>AC</button>
                  <button onClick={()=>{Delete()}}>DEL</button>
                  <button onClick={()=>{clickSign("/")}}>/</button>
                  <button onClick={()=>clickNumber(7)}>7</button>
                  <button onClick={()=>clickNumber(8)}>8</button>
                  <button onClick={()=>clickNumber(9)}>9</button>
                  <button onClick={()=>{clickSign("*")}}>*</button>
                  <button onClick={()=>clickNumber(4)}>4</button>
                  <button onClick={()=>clickNumber(5)}>5</button>
                  <button onClick={()=>clickNumber(6)}>6</button>
                  <button onClick={()=>{clickSign("+")}}>+</button>
                  <button onClick={()=>clickNumber(1)}>1</button>
                  <button onClick={()=>clickNumber(2)}>2</button>
                  <button onClick={()=>clickNumber(3)}>3</button>
                  <button onClick={()=>{clickSign("-")}}>-</button>
                  <button onClick={()=>{clickNumber(".")}}>.</button>
                  <button onClick={()=>{clickNumber(0)}}>0</button>
                  <button onClick={() => getPerious()} className={'span-two'}>=</button>
      </div>
    </div>
  );
}

export default App;
