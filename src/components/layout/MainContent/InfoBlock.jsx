import "./InfoBlock.css";
import normalizeId from "../../../utils/normalizeId";

export default function InfoBlock({ titulo, children }) {
  return (
    <div className="info-block">
      {titulo && (
        <h3 id={normalizeId(titulo)} className="info-title">
          {titulo}
        </h3>
      )}
      <div className="info-content">{children}</div>
    </div>
  );
}
