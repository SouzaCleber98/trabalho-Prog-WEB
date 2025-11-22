import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

export default function Home() {
  const sectionHeaderInfo = {
    mainTitle: "Introdução",
    subtitles: ["O que é","Pra que serve"],
  };

  const contentBlocks = [
    {
      titulo: "O que é",
      conteudo: (
        <p>
          React é uma biblioteca JavaScript para construir interfaces que mudam
          muito, usando componentes que se atualizam sozinhos quando os dados
          mudam...
        </p>
      ),
    },
    {
      titulo: "Pra que serve",
      conteudo: (
        <p>
          Serve para criar interfaces web dinâmicas sem te fazer arrancar os
          cabelos. Ele ajuda a construir e atualizar elementos da página de
          forma eficiente...
        </p>
      ),
    },
  ];

  return (
    <>
      <SectionHeader title={sectionHeaderInfo.mainTitle} subtitles={sectionHeaderInfo.subtitles} />
      <InfoSection blocos={contentBlocks} />
    </>
  );
}
