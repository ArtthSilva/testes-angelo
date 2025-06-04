#language: pt
Funcionalidade: Verificar se a página de leis e decretos municipais, estaduais e federais está acessível
Cenário: Verificar se a página de leis e decretos está acessível buscando por uma parte do título, sendo "Altera os Arts. 2º e 4º do Decreto Municipal nº 9.952/2022"
    Dado que eu acesso o site de transparência de João Pessoa
    Quando eu clico no botão de Leis e Decretos
    E devo clicar no campo "Buscar título"
    E devo digitar "Altera os Arts. 2º e 4º do Decreto Municipal nº 9.952/2022"
    E devo ver na tabela de leis e decretos a coluna "Título do documento" com o texto "Decreto nº 10.988/2025 - Altera os Arts. 2º e 4º do Decreto Municipal nº 9.952/2022"
