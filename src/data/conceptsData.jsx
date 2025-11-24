const sectionHeaderInfo = {
  mainTitle: "Conceitos",
  subtitles: ["Props x State"],
};

const contentBlocks = [
  {
    titulo: "Props x State",
    conteudo: (
      <table>
        <thead>
          <tr>
            <th>Diferença</th>
            <th>Props</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Origim</td>
            <td>Vêm do componente pai</td>
            <td>Pertence ao próprio componente</td>
          </tr>
          <tr>
            <td>Mutabilidade</td>
            <td>Imutáveis</td>
            <td>Mutáveis</td>
          </tr>
          <tr>
            <td>Quem altera</td>
            <td>Apenas o componente pai</td>
            <td>O próprio componente</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

export { sectionHeaderInfo, contentBlocks };
