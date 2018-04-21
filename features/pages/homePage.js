const Selector = require('testcafe').Selector;

module.exports = class HomePage {
    constructor () {
       this.buttonAluguel = Selector('#btnLocacao');
       this.inputBairro = Selector('#location');
       this.buttonBuscar = Selector('#btnBuscar');
    }

}
