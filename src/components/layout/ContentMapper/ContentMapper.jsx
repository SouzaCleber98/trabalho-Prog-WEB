import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import InfoSection from "../MainContent/InfoSection";

export default function ContentMapper({ sections }) {
  if (!sections || !Array.isArray(sections) || sections.length === 0) {
    return <p>Nenhuma seção de conteúdo encontrada.</p>;
  }

  return (
    <>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <SectionHeader
            title={section.header.mainTitle}
            subtitles={section.header.subtitles}
          />

          <InfoSection blocos={section.blocks} />
        </React.Fragment>
      ))}
    </>
  );
}
