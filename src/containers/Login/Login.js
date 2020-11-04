import React, { useState, useEffect } from "react";
import "./Login.scss";

import Utility from "../../utility/Keys";

import LoginLanguage from "../../components/Login/LoginLanguage/LoginLanguage";
import LoginForm from "../../components/Login/LoginForm/LoginForm";

import axios from '../../utility/axios'

const Login = (props) => {
  const [step, setStep] = useState(0);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

  const [data,setData] = useState({
    username:"ewfwe24tc3t3c4",
    password:"Kz7f5ph8xbMH"
  })

  useEffect(() => {
    const down = () => {
      switch (step) {
        case 0:
          row < 2 && setRow((r) => r + 1);
          break;
        case 1:
          row < 3 && setRow((r) => r + 1);
          break;
        default:
          break;
      }
    };

    const up = () => {
      row > 0 && setRow((r) => r - 1);
    };

    const left = () => {
      if (step === 1 && row === 2) {
        column === 1 && setColumn(0);
      }
    };

    const right = () => {
      if (step === 1 && row === 2) {
        column === 0 && setColumn(1);
      }
    };

    const enter = () => {
      switch (step) {
        case 0:
          setRow(0);
          setColumn(0);
          setStep(1);
          break;
        case 1:
          if (row === 2) {
              if(column === 0){
                localStorage.setItem("jwToken","hash")
                login()
                props.history.push('/home')
              }else if (column === 1) {
              setRow(0);
              setStep(0);
            }
          }
          break;
        default:
          break;
      }
    };

    const keyHandler = (e) => {
      switch (e.keyCode) {
        case Utility.down:
          down();
          break;
        case Utility.up:
          up();
          break;
        case Utility.left:
          left();
          break;
        case Utility.right:
          right();
          break;
        case Utility.enter:
          enter();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  const login = () => {
    axios.post("/login",{username:data.username,password:data.password})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div className="Login">
      <div className="background"></div>
      <div className="main">
        {step === 0 && (
          <>
            <h1>CHOOSE LANGUAGE</h1>
            <LoginLanguage active={row} />
          </>
        )}
        {step === 1 && (
          <>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <LoginForm row={row} column={column} />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
