import { Component } from "react";
import NameModal from "../namemodal/namemodal";
import "./savebutton.css";

class SaveButton extends Component<{}, { showModal: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { showModal: false };
  }

  setModalState = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  addWorkspace = (workspaceName: string) => {
    chrome.runtime.sendMessage(
      { message: "save_workspace_to_storage", name: workspaceName },
      (e) => {
        window.location.reload();
      }
    );
  };

  render() {
    return (
      <div className="savebutton-wrapper">
        <button onClick={this.setModalState} className="savebutton-btn">
          Save Workspace
        </button>
        {this.state.showModal && (
          <NameModal
            changeState={this.setModalState}
            addWorkspace={this.addWorkspace}
          />
        )}
      </div>
    );
  }
}

export default SaveButton;
