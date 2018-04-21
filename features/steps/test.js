const HomePage = require('../pages/homePage.js');
const ResultadosPage  = require('../pages/results.js');
const Selector = require('testcafe').Selector;

const { defineSupportCode } = require('cucumber');
const home = new HomePage;

defineSupportCode(({ Given, When, Then }) => {
  let testController = null;

  Given('tela inicial do zapimoveis', function () {
    return this.waitForTestController()
      .then((controller) => {
        testController = controller;
        return testController.navigateTo('https://www.zapimoveis.com.br');
      });
  });

  When('clicar em na opcao aluguel', function ()  {
    return testController
            .click(home.buttonAluguel);
  });

  When('inserir bairro {stringInDoubleQuotes}', (bairro) => {
    return testController
              .typeText(home.inputBairro, bairro)
              .pressKey('enter');
  });

  When('clicar em buscar', function () {
     testController
             .click(home.buttonBuscar);
      return resultados = new ResultadosPage(testController);

  });

  Then('exibir mensagem {stringInDoubleQuotes}',  {timeout: 30000}, (mensagem)  => {
    return testController
            .expect(resultados.labelPesquisa.innerText).contains(mensagem);
  });
});
