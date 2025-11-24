import "./Sidebar.css";
import normalizeId from "../../../utils/normalizeId";

function Sidebar({ links = [], isOpen, toggleSidebar }) {
  return (
    <>
      {!isOpen && <div className="side-square" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>

        {links.length > 0 ? (
          links.map((sub, i) => (
            <a key={i} href={`#${normalizeId(sub)}`}>
              {sub}
            </a>
          ))
        ) : (
          <p>Nenhum título disponível</p>
        )}
      </div>
    </>
  );
}

export default Sidebar;
