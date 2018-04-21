const Selector = require('testcafe').Selector;

module.exports =  class ResultadosPage {
    constructor (testController) {
       this.labelPesquisa = Selector('#divBuscaServer > div:nth-child(2) > header > div > div > h1').with({ boundTestRun: testController });

    }
}
