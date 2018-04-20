const { defineSupportCode } = require('cucumber');
const Selector = require('testcafe').Selector;

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
    const buttonAluguel = Selector('#btnLocacao').with({ boundTestRun: testController });
    return testController.click(buttonAluguel);
  });

  When('inserir bairro {stringInDoubleQuotes}', (bairro) => {
    const inputBairro = Selector('#location').with({ boundTestRun: testController });
    return testController.typeText(inputBairro, bairro);
  });

  When('clicar em buscar', function () {
    const buttonBuscar = Selector('#btnBuscar').with({ boundTestRun: testController });
    return testController.click(buttonBuscar);
  });

  Then('exibir mensagem {stringInDoubleQuotes}', (mensagem)  => {
    const labelPesquisa = Selector('#title pull-left').with({ boundTestRun: testController });
    return testController.expect(labelPesquisa.innerText).contains(mensagem);
  });
});