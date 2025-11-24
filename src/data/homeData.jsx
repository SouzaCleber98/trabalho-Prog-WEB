const sectionHeaderInfo = {
  mainTitle: "Introdução",
  subtitles: ["O que é", "Pra que serve"],
};

const contentBlocks = [
  {
    titulo: "O que é",
    conteudo: (
      <p>
        React é uma biblioteca JavaScript para construir interfaces que mudam
        muito, usando componentes que se atualizam sozinhos quando os dados
        mudam. Ele organiza a página em partes pequenas e independentes, usa um
        tal de Virtual DOM para deixar tudo rápido e permite criar aplicações
        inteiras só pensando em como o estado muda ao longo do tempo. Isso torna
        o desenvolvimento mais previsível e fácil de manter, mesmo em projetos
        grandes e complexos.
      </p>
    ),
  },
  {
    titulo: "Pra que serve",
    conteudo: (
      <p>
        Serve para criar interfaces web dinâmicas sem te fazer arrancar os
        cabelos. Ele ajuda a construir e atualizar elementos da página de forma
        eficiente, organizar o código em componentes separados e manter o estado
        da aplicação controlado sem virar um caos completo. Ideal para sites e
        apps que mudam o conteúdo a toda hora, como redes sociais, plataformas
        de streaming, e-commerce ou qualquer sistema interativo que precisa
        responder rápido às ações do usuário.
      </p>
    ),
  },
];

const sectionHeaderInfoExtra = {
  mainTitle: "Mais sobre React",
  subtitles: ["Como funciona", "Principais vantagens", "Ecossistema"],
};

const contentBlocksExtra = [
  {
    titulo: "Como funciona",
    conteudo: (
      <p>
        O React funciona criando uma representação virtual da interface chamada
        Virtual DOM. Quando o estado ou os dados mudam, ele compara essa versão
        virtual com a real e atualiza apenas o que foi alterado, evitando
        recarregar a página inteira. Isso garante desempenho e uma experiência
        fluida para o usuário.
      </p>
    ),
  },
  {
    titulo: "Principais vantagens",
    conteudo: (
      <p>
        Entre as vantagens estão: reutilização de componentes, que economiza
        tempo e esforço; comunidade ativa e vasta documentação; integração fácil
        com outras bibliotecas e frameworks; além de suporte para aplicações
        grandes e escaláveis. Tudo isso torna o React uma escolha popular entre
        desenvolvedores.
      </p>
    ),
  },
  {
    titulo: "Ecossistema",
    conteudo: (
      <p>
        O React não anda sozinho: ele faz parte de um ecossistema rico.
        Ferramentas como React Router ajudam na navegação, Redux ou Context API
        cuidam do gerenciamento de estado, e frameworks como Next.js permitem
        criar aplicações completas com renderização no servidor e otimização de
        SEO.
      </p>
    ),
  },
];

const sidebarLinks = [
  "O que é",
  "Pra que serve",
  "Como funciona",
  "Principais vantagens",
  "Ecossistema",
];

export {
  sectionHeaderInfo,
  contentBlocks,
  sectionHeaderInfoExtra,
  contentBlocksExtra,
  sidebarLinks,
};
