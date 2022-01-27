import { Component, ReactNode } from "react";
import "./workspace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
interface Props {
  name: string;
  elements: [];
  reloadFunction: () => void;
}
export default class Workspace extends Component<Props> {
  OpenButtonEventHandler = () => {
    chrome.runtime.sendMessage({
      message: "open_workspace_on_new_window",
      elements: this.props.elements,
    });
  };

  DeleteButtonEventHandler = () => {
    chrome.runtime.sendMessage(
      {
        message: "delete_workspace_from_storage",
        name: this.props.name,
      },
      () => {
        window.location.reload();
      }
    );
  };

  render(): ReactNode {
    return (
      <div className="workspace-wrapper">
        <div className="workspace-btn-wrapper">
          <button
            onClick={this.OpenButtonEventHandler}
            className="workspace-btn"
          >
            <FontAwesomeIcon size="1x" icon={faExternalLinkAlt} />{" "}
          </button>
          <button
            onClick={this.DeleteButtonEventHandler}
            className="workspace-btn"
          >
            <FontAwesomeIcon size="1x" icon={faTrashAlt} />
          </button>
        </div>

        <span className="workspace-span">{this.props.name}</span>
      </div>
    );
  }
}
