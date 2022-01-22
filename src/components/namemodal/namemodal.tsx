import { KeyboardEvent } from "react";
import "./namemodal.css";

interface props{
  changeState:() => void
  addWorkspace:(workspaceName:string)=> void
}

export default function NameModal({changeState,addWorkspace}:props) {

  function inputHandler(e:KeyboardEvent<HTMLInputElement>) {
    if(e.key === "Enter"){
      changeState()
      addWorkspace(e.currentTarget.value)
    }
  }

  return (
    <div className="namemodal-bg">
      <div className="namemodal-container">
        <div className="namemodal-btn-wrapper">
          <button onClick={changeState} className="namemodal-btn">X</button>
        </div>
        <h3>Give your workspace a name</h3>
        <input autoFocus onKeyPress={inputHandler} type="text" />
      </div>
    </div>
  );
}


