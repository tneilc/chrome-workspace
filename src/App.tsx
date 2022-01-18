import React from "react";
import "./App.css";
import SaveButton from "./components/savebutton/savebutton";
import Workspace from "./components/workspace/workspace";

function App() {
  return (
    <div className="App">
      <div className="app-list">
        <ul>
          <Workspace name="helman" />
          <Workspace name="helasdasdsadasdasdasdsaasasdsadsadasddasdsman" />
          <Workspace name="helman" />
          <Workspace name="helman" />

        </ul>
      </div>
      <SaveButton />
    </div>
  );
}

export default App;
