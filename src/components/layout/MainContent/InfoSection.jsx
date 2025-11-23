import InfoBlock from "./InfoBlock";
import "./InfoSection.css";

export default function InfoSection({ blocos }) {
  return (
    <section className="info-section">
      {blocos.map((bloco, index) => (
        <InfoBlock key={index} titulo={bloco.titulo}>
          {bloco.conteudo}
        </InfoBlock>
      ))}
    </section>
  );
}
