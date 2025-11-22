import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import InfoSection from "../components/layout/MainContent/InfoSection";

export default function WebApplication() {
  const sectionHeaderInfo = {
    mainTitle: "Aplicação Web",
    subtitles: ["Uso", "Resultado"],
  };

  const contentBlocks = [
    {
      titulo: "Resultado",
      conteudo: (
        <form>
          <label>
            Name: <input type="text" />
          </label>
          <br />
          <label>
            Age:
            <select>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </label>
          <br />
          <label>
            Birthdate: <input type="date" />
          </label>
          <br />
          <label>
            Address: <input type="text" />
          </label>
          <br />
          <label>
            Message: <textarea />
          </label>
          <br />
          <button type="reset">Clear</button>
          <button type="submit">Send</button>
        </form>
      )
    },
  ];

  return (
    <>
      <SectionHeader title={sectionHeaderInfo.mainTitle} subtitles={sectionHeaderInfo.subtitles} />
      <InfoSection blocos={contentBlocks} />
    </>
  );
}
