#language: pt
Funcionalidade: Buscar imovel para alugar

  Cenario: Buscar imovel para alugar por nome de bairro
    Dado tela inicial do zapimoveis
    Quando clicar em na opcao aluguel
    Quando inserir bairro "Vila Clementino"
    Quando clicar em buscar
    Entao exibir mensagem "apartamentos para alugar em Vila Clementino, São Paulo - SP"
