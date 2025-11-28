import { useState, useEffect } from "react";
import Sidebar from "../components/ui/SideBar/SideBar";
import ContentMapper from "../components/layout/ContentMapper/ContentMapper";

// Content data
import data from "../data/webApplicationData.json";

export default function WebApplication() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.title = "Aplicação Web";
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
