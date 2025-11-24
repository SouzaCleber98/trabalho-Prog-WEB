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

const sectionHeaderInfoExtra = {
  mainTitle: "Mais sobre Props e State",
  subtitles: ["O que são Props", "O que é State"],
};

const contentBlocksExtra = [
  {
    titulo: "O que são Props",
    conteudo: (
      <div>
        <p>
          <strong>Props</strong> são propriedades que permitem a comunicação
          entre componentes. Elas funcionam como parâmetros que um componente
          pai envia para um componente filho, garantindo que o mesmo componente
          possa ser reutilizado em diferentes contextos sem precisar ser
          reescrito. Essa característica torna os componentes altamente
          flexíveis e adaptáveis, já que podem receber dados variados e se
          comportar de acordo com o que foi definido externamente.
        </p>
        <p>
          Uma das principais características das props é que elas são imutáveis.
          Isso significa que, uma vez recebidas pelo componente, não podem ser
          alteradas internamente. Essa imutabilidade garante maior
          previsibilidade no fluxo de dados e ajuda a manter a aplicação
          organizada, evitando efeitos colaterais inesperados.
        </p>
      </div>
    ),
  },
  {
    titulo: "O que é State",
    conteudo: (
      <div>
        <p>
          <strong>State</strong> é o mecanismo interno de um componente para
          armazenar e gerenciar informações que mudam ao longo do tempo. Ele
          representa o “estado atual” do componente e é responsável por
          controlar dados dinâmicos, como valores que se modificam em resposta a
          interações do usuário ou eventos do sistema.
        </p>
        <p>
          Diferente das props, o state é mutável e pode ser atualizado pelo
          próprio componente. Cada vez que o state muda, o React re-renderiza o
          componente automaticamente, refletindo essas alterações na interface.
          Isso torna o state essencial para criar aplicações interativas e
          responsivas, já que permite acompanhar e reagir às mudanças de forma
          eficiente.
        </p>
      </div>
    ),
  },
];
[];
const sidebarLinks = ["Props x State", "O que são Props", "O que é State"];

export {
  sectionHeaderInfo,
  contentBlocks,
  sectionHeaderInfoExtra,
  contentBlocksExtra,
  sidebarLinks,
};
