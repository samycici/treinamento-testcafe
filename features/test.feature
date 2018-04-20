Feature: Buscar imovel para augar

  Scenario: Buscar imovel para alugar por nome de bairro
    Given tela inicial do zapimoveis
    When clicar em na opcao aluguel
    When inserir bairro "Vila Clementino"
    When clicar em buscar
    Then exibir mensagem "apartamentos para alugar em Vila Clementino, São Paulo - SP'"