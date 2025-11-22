import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

export default function Concepts() {
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
              <th>Difference</th>
              <th>Props</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Origin</td>
              <td>Comes from parent</td>
              <td>Belongs to component</td>
            </tr>
            <tr>
              <td>Mutability</td>
              <td>Immutable</td>
              <td>Mutable</td>
            </tr>
            <tr>
              <td>Who changes</td>
              <td>Only parent</td>
              <td>Component itself</td>
            </tr>
          </tbody>
        </table>
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
