import React, { useState, useEffect } from "react";
import "./Login.scss";

import Utility from "../../utility/Keys";

import LoginLanguage from "../../components/Login/LoginLanguage/LoginLanguage";
import LoginForm from "../../components/Login/LoginForm/LoginForm";

const Login = (props) => {
  const [step, setStep] = useState(0);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

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
                props.history.push('/home')
              }else if (column === 1) {
              setRow(0);
              setStep(0);
            }
          }
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

  return (
    <div className="Login">
      <div className="background"></div>
      <div className="main">
        {step === 0 && (
          <React.Fragment>
            <h1>CHOOSE LANGUAGE</h1>
            <LoginLanguage active={row} />
          </React.Fragment>
        )}
        {step === 1 && (
          <React.Fragment>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <LoginForm row={row} column={column} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Login;
