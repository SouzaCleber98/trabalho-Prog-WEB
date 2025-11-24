import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/ui/SideBar/SideBar";
import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

// Content data
import {
  sectionHeaderInfo,
  contentBlocks,
  sectionHeaderInfoExtra,
  contentBlocksExtra,
  sidebarLinks,
} from "../data/homeData";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Sidebar
        links={sidebarLinks}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />

      <SectionHeader
        title={sectionHeaderInfo.mainTitle}
        subtitles={sectionHeaderInfo.subtitles}
      />
      <InfoSection blocos={contentBlocks} />

      <SectionHeader
        title={sectionHeaderInfoExtra.mainTitle}
        subtitles={sectionHeaderInfoExtra.subtitles}
      />
      <InfoSection blocos={contentBlocksExtra} />
    </>
  );
}
