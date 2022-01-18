import "./workspace.css";

interface Props {
  name: string;
}
export default function Workspace({ name }: Props) {
  return (
    <div className="workspace-wrapper">
      <div className="workspace-btn-wrapper">
        <button className="workspace-btn"></button>
        <button className="workspace-btn"></button>
      </div>

      <span className="workspace-span">{name}</span>
    </div>
  );
}
