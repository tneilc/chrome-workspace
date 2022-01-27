import React, { Component } from "react";
import "./App.css";
import SaveButton from "./components/savebutton/savebutton";
import Workspace from "./components/workspace/workspace";

interface IState {
  workspaces: JSX.Element[];
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { workspaces: [] };
  }

  loadWorkspaces() {
    chrome.runtime.sendMessage(
      { message: "load_workspaces_to_ui" },
      (e: { [key: string]: [] }) => {
        let res: JSX.Element[] = [];
        Object.entries(e).forEach(([key, value]) => {
          res.push(
            <Workspace
              reloadFunction={this.loadWorkspaces}
              name={key}
              elements={value}
            />
          );
        });
        this.setState({ workspaces: res });
      }
    );
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <div className="app-list">
          <div className="app-list-elements">{this.state.workspaces}</div>
        </div>
        <SaveButton />
      </div>
    );
  }

  componentDidMount() {
    this.loadWorkspaces();
  }
}

export default App;
