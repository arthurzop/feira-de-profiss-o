import "./button.css";

export default function Button({ Click, label }) {
  return <button onClick={Click}>{label}</button>;
}
