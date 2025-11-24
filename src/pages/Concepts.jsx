import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/ui/SideBar/SideBar";
import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

// Content data
import { sectionHeaderInfo, contentBlocks } from "../data/conceptsData";

export default function Concepts() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.title = "Conceitos";
  }, []);

  return (
    <>
      <Sidebar
        links={sectionHeaderInfo.subtitles}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />

      <SectionHeader
        title={sectionHeaderInfo.mainTitle}
        subtitles={sectionHeaderInfo.subtitles}
      />
      <InfoSection blocos={contentBlocks} />
    </>
  );
}
