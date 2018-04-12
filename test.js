import { Selector } from 'testcafe';

fixture `My teste`.page `https://www.zapimoveis.com.br`;

test('My first test', async t => {
    await t
    .click('#btnLocacao')
        .click('#btnLocacao')
        .typeText('#location', 'Centro')
        .click('#btnBuscar')
        .expect.innerText('h1[itemprop=name]').eql('apartamentos para alugar em Vila Clementino, São Paulo - SP')
});