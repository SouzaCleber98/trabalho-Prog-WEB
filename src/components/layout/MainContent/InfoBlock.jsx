import React, { useState } from "react";
import "./InfoBlock.css";
import normalizeId from "../../../utils/normalizeId";

export default function InfoBlock({ titulo, children }) {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    setFormData(Object.fromEntries(data.entries()));
  };

  const renderElement = (item, index) => {
    const { tipo, texto, src, alt, href, cabecalho, linhas } = item;
    const Tag = tipo;

    switch (Tag) {
      case "p":
        return <p key={index}>{texto}</p>;
      case "img":
        return (
          <img key={index} src={src} alt={alt} style={{ maxWidth: "100%" }} />
        );
      case "a":
        return (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            {texto}
          </a>
        );

      case "tabela":
        return (
          <table key={index}>
            <thead>
              <tr>
                {cabecalho.map((header, hIndex) => (
                  <th key={hIndex}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, rIndex) => (
                <tr key={rIndex}>
                  {linha.map((dado, dIndex) => (
                    <td key={dIndex}>{dado}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "form":
        if (formData) {
          return (
            <div key={index} className="form-result">
              <h4>Dados Enviados:</h4>
              {item.inputs.map((input, i) => (
                <p key={i}>
                  <strong>{input.label}</strong>{" "}
                  {formData[input.props.name] || "-"}
                </p>
              ))}
              <button onClick={() => setFormData(null)}>
                Editar novamente
              </button>
            </div>
          );
        }

        return (
          <form key={index} onSubmit={handleSubmit}>
            {item.inputs.map((input, i) => (
              <div key={i}>
                <label htmlFor={input.props.id}>{input.label}</label>
                {input.tag === "textarea" ? (
                  <textarea {...input.props} />
                ) : input.props.type === "select" ? (
                  <select {...input.props}>
                    {input.options.map((opt, optIndex) => (
                      <option key={optIndex} value={opt.val}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input {...input.props} />
                )}
              </div>
            ))}
            <div>
              {item.resetText && (
                <button type="reset" style={{ marginRight: "10px" }}>
                  {item.resetText}
                </button>
              )}
              <button type="submit">{item.submitText || "Enviar"}</button>
            </div>
          </form>
        );

      default:
        return (
          <p key={index} style={{ color: "red" }}>
            Erro: Tag {tipo} não suportada.
          </p>
        );
    }
  };

  return (
    <div className="info-block">
      {titulo && (
        <h3
          id={normalizeId(titulo)}
          className="info-title"
          onClick={() => setOpen(!open)}
        >
          {titulo}
        </h3>
      )}

      {open && (
        <div className="info-content">
          {children && Array.isArray(children)
            ? children.map(renderElement)
            : children}
        </div>
      )}
    </div>
  );
}
