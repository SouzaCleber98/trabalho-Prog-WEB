const sectionHeaderInfo = {
  mainTitle: "Aplicação Web",
  subtitles: ["Uso", "Resultado"],
};

const contentBlocks = [
  {
    titulo: "Uso",
    conteudo: (
      <p>
        React é utilizado na programação web para desenvolver interfaces de
        forma estruturada, modular e eficiente. A biblioteca organiza a
        aplicação em componentes independentes, permitindo a reutilização de
        elementos e facilitando a manutenção do código. A gestão de estado
        integrada possibilita que a interface responda a mudanças nos dados em
        tempo real, garantindo uma experiência fluida para o usuário e reduzindo
        a complexidade do desenvolvimento.
      </p>
    ),
  },
  {
    titulo: "Resultado",
    conteudo: (
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="nascimento">Nascimento:</label>
        <input type="date" id="nascimento" name="nascimento" required />

        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" name="sexo" required>
          <option value="">Selecione</option>
          <option>M</option>
          <option>F</option>
          <option>Outro</option>
        </select>

        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>

        <button type="reset">Limpar</button>
        <button type="submit">Enviar</button>
      </form>
    ),
  },
];

export { sectionHeaderInfo, contentBlocks };
