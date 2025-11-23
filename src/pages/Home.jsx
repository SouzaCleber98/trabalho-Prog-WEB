import { useEffect } from "react";
import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const sectionHeaderInfo = {
    mainTitle: "Introdução",
    subtitles: ["O que é", "Pra que serve"],
  };

  const contentBlocks = [
    {
      titulo: "O que é",
      conteudo: (
        <p>
          React é uma biblioteca JavaScript para construir interfaces que mudam
          muito, usando componentes que se atualizam sozinhos quando os dados
          mudam. Ele organiza a página em partes pequenas e independentes, usa
          um tal de Virtual DOM para deixar tudo rápido e permite criar
          aplicações inteiras só pensando em como o estado muda ao longo do
          tempo. Isso torna o desenvolvimento mais previsível e fácil de manter,
          mesmo em projetos grandes e complexos.
        </p>
      ),
    },
    {
      titulo: "Pra que serve",
      conteudo: (
        <p>
          Serve para criar interfaces web dinâmicas sem te fazer arrancar os
          cabelos. Ele ajuda a construir e atualizar elementos da página de
          forma eficiente, organizar o código em componentes separados e manter
          o estado da aplicação controlado sem virar um caos completo. Ideal
          para sites e apps que mudam o conteúdo a toda hora, como redes
          sociais, plataformas de streaming, e-commerce ou qualquer sistema
          interativo que precisa responder rápido às ações do usuário.
        </p>
      ),
    },
  ];

  return (
    <>
      <SectionHeader
        title={sectionHeaderInfo.mainTitle}
        subtitles={sectionHeaderInfo.subtitles}
      />
      <InfoSection blocos={contentBlocks} />
    </>
  );
}
