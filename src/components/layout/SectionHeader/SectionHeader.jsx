import "./SectionHeader.css";

export default function SectionHeader({ title, subtitles }) {
  return (
    <section className="section-header">
      {title && (
        <div className="section-title">
          <h2 className="title">{title}</h2>
        </div>
      )}

      {subtitles && subtitles.length > 0 && (
        <div className="section-subtitles">
          {subtitles.map((sub, index) => (
            <span key={index} className="section-subtitle">
              {sub}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
