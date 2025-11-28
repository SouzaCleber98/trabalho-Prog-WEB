import { useState, useEffect } from "react";
import Sidebar from "../components/ui/SideBar/SideBar";
import ContentMapper from "../components/layout/ContentMapper/ContentMapper";

// Content data
import data from "../data/homeData.json";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.title = "Home";
  }, []);

  const { contentSections, sidebarLinks } = data;

  return (
    <>
      <Sidebar
        links={sidebarLinks}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />

      <ContentMapper sections={contentSections} />
    </>
  );
}
