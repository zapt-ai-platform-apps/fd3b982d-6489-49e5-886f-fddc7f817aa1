# Jornada: Pesquisar Produtos

Esta jornada guia o usuário na busca e visualização de produtos com os melhores preços disponíveis nas lojas.

1. **Tela Inicial**  
   - O usuário vê um campo de busca com o placeholder "Digite o nome do produto" e um botão "Buscar".
2. **Inserir Consulta**  
   - O usuário digita o nome do produto que deseja pesquisar.
3. **Acionamento da Busca**  
   - Ao clicar em "Buscar", um indicador de carregamento é exibido enquanto o aplicativo consulta a API.
4. **Processamento da Busca**  
   - Uma solicitação é enviada para a API de busca, que filtra produtos com base na consulta.
5. **Exibição dos Resultados**  
   - A API retorna uma lista de produtos com detalhes como nome, preço, loja e imagem.
   - Os resultados são apresentados na tela.
6. **Tratamento de Erros**  
   - Se ocorrer um erro durante a busca, uma mensagem informativa é exibida ao usuário.