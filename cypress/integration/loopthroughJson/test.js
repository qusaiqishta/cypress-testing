const data = require('../../fixtures/request/test.json')
let apiData;
describe('Matching Api Data With UI Data', () => {
    before(() => {
        cy.request('GET', 'https://bacon.forbes.com/bacon-forbes-prd/most-popular-galleries-1yr/payload.json')
            .then(res => {
                apiData = JSON.parse(res.body)

            })
    })
    beforeEach(() => {
        cy.visit('https://www.forbes.com/pictures/ghje45eehe/tanaquilla/?sh=54c88da846b0')
    })

    let titleArrayUi = [];
    let urlArrayUi = [];

    it('Should titles be identical', () => {

        cy.get('a.grid__title h3').each((titleUi, index) => {
            // titleArrayUi.push(titleUi.text())
            const text = titleUi.text();
            // for (let i = 0; i < titleArrayUi.length; i++) {
            expect(text).to.equal(apiData[index].title)
            // }
        })
    })

    it('should urls be identical', () => {
        cy.get('a.grid__title').each((link, index) => {
            urlArrayUi.push(link.attr('href'))
            expect(urlArrayUi[index]).to.equal(apiData[index].uri)
        })
    })
})