import "./InfoBlock.css";

export default function InfoBlock({ titulo, children }) {
  return (
    <div className="info-block">
      {titulo && <h3 className="info-title">{titulo}</h3>}
      <div className="info-content">{children}</div>
    </div>
  );
}
