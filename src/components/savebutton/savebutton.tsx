import { Component } from "react";
import NameModal from "../namemodal/namemodal";
import "./savebutton.css";

class SaveButton extends Component<{}, { showModal: boolean ,buttonText:string}> {
  constructor(props: any) {
    super(props);
    this.state = { showModal: false ,buttonText:"Save Workspace"};
  }

  setModalState = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  addWorkspace = (workspaceName: string) => {
    chrome.runtime.sendMessage(
      { message: "save_workspace_to_storage", name: workspaceName },
      (e) => {
        console.log(e)
        if(e === true){

          window.location.reload();
        }else {
          this.setState({buttonText:"Failed"})
          setTimeout(() => {
            this.setState({buttonText:"Save Workspace"})
          }, 2000);
        }
      }
    );
  };

  render() {
    return (
      <div className="savebutton-wrapper">
        <button onClick={this.setModalState} className="savebutton-btn">
          {this.state.buttonText}
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
