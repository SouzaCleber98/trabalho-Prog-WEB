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

  const isForm = children?.type === "form";

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
          {isForm ? (
            formData ? (
              <div>
                <p>
                  <strong>Nome:</strong> {formData.nome}
                </p>
                <p>
                  <strong>Nascimento:</strong> {formData.nascimento}
                </p>
                <p>
                  <strong>Sexo:</strong> {formData.sexo}
                </p>
                <p>
                  <strong>Endereço:</strong> {formData.endereco}
                </p>
                <p>
                  <strong>Mensagem:</strong> {formData.mensagem}
                </p>
                <button onClick={() => setFormData(null)}>
                  Editar novamente
                </button>
              </div>
            ) : (
              React.cloneElement(children, { onSubmit: handleSubmit })
            )
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
}
