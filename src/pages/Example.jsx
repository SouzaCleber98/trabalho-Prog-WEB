import { useEffect } from "react";
import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

export default function Example() {
  useEffect(() => {
    document.title = "Exemplo";
  }, []);

  const sectionHeaderInfo = {
    mainTitle: "Exemplo",
    subtitles: ["Exemplo Pagina", "Exemplo código"],
  };

  const contentBlocks = [
    {
      titulo: "Page Title",
      conteudo: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta
          modi non? Pariatur atque quod ab odio ipsam velit. Nisi rerum
          doloribus odio accusamus explicabo totam laboriosam libero dignissimos
          voluptatibus?
        </p>
      ),
    },
    {
      titulo: "HTML Example",
      conteudo: (
        <pre>
          {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Web Example</title>
</head>
<body>
  <h1>User Title</h1>
  <div id="load-data">Load Data</div>
</body>
</html>`}
        </pre>
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
