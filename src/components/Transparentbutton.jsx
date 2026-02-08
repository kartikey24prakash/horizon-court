import "./transparentbutton.css";

export default function CourtAccessButton(props) {

  return (
    <button className="glass-btn">
      {props.name}
    </button>
  );
}
