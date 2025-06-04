#language: pt
Funcionalidade: Verificar se existe algum concurso em andamento
Cenário: Acessar a página de concursos em andamento
  Dado que eu acesso o site de transparência de João Pessoa
  Quando eu clico no link de Concursos
  Então devo ser redirecionado para a página de Concursos
  E a página deve conter o texto "Concursos"
  Então devo clicar no dropdown Status
  E devo selecionar a opção "Em Andamento" 
  E devo clicar no botão "Pesquisar" 
  Então devo ver na o dado da tabela de concursos "Data de Publicação"
 
