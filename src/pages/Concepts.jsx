import { useEffect } from "react";
import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

export default function Concepts() {
  useEffect(() => {
    document.title = "Conceitos";
  }, []);

  const sectionHeaderInfo = {
    mainTitle: "Conceitos",
    subtitles: ["Props", "State"],
  };

  const contentBlocks = [
    {
      conteudo: (
        <table>
          <thead>
            <tr>
              <th>Diferença</th>
              <th>Props</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Origim</td>
              <td>Vêm do componente pai</td>
              <td>Pertence ao próprio componente</td>
            </tr>
            <tr>
              <td>Mutabilidade</td>
              <td>Imutáveis</td>
              <td>Mutáveis</td>
            </tr>
            <tr>
              <td>Quem altera</td>
              <td>Apenas o componente pai</td>
              <td>O próprio componente</td>
            </tr>
          </tbody>
        </table>
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
