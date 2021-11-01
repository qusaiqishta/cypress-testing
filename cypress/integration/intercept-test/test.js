describe('Intercept Mock Api', () => {
    it('intial validation', () => {
        cy.visit('/heroes-finished.html')
        cy.get('section article').should('have.length', 3)
            .and('contain', 'Molecule Man')
            .and('contain', 'Madame Uppercut')
            .and('contain', 'Eternal Flame')
    })
    it('mocked api response', () => {
        cy.intercept('GET', '**/superheroes.json', { fixture: '/intercept/intercept.json' }).as('members')
        cy.visit('/heroes-finished.html')
        cy.wait('@members')
        cy.get('section article').should('have.length', 1)
            .and('contain', 'super man')

    })
    it('mocked a ready todo', () => {
        const newObj = {
            "squadName": "Super Hero Squad",
            "homeTown": "Metro City",
            "formed": 2016,
            "secretBase": "Super tower",
            "active": true,
            "members": [
              {
              "name": "super man",
               "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                "flying",
                "destroying bad strong guys",
                "holds buildings",
                "Teleportation",
                "Interdimensional travel"
                ]
                },
            {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
            ]
            },
            {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
            ]
            }
            ]
            }
        cy.intercept('GET', '**/superheroes.json', newObj).as('members')
        cy.visit('/heroes-finished.html')
        cy.wait('@members')
        cy.get('section article').should('have.length', 3)
            .and('contain', 'super man')
            .and('contain', 'Madame Uppercut')
            .and('contain', 'Eternal Flame')
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Verify Number Of Views Of Specific Article', () => {

    it('should number of views comes from api equal to one exist in front end page', () => {
        var apiviews;
        cy.request('GET', 'https://www.forbes.com/tamagotchi/v1/fetchLifetimeViews/?id=blogAndPostId/blog/post/50531-6163e1d68708d90006613a63')
            .should(response => {
                apiviews = response.body['views']



                const obj = { "id": "blogandpostid/blog/post/50531-6163e1d68708d90006613a63", "views": apiviews }

                cy.intercept('GET', 'https://www.forbes.com/tamagotchi/v1/fetchLifetimeViews/?id=blogAndPostId/blog/post/50531-6163e1d68708d90006613a63', obj).as('views')

                cy.visit('https://www.forbes.com/sites/siladityaray/2021/10/11/sydney-celebrates-freedom-day-after-nearly-four-months-of-covid-lockdown-as-vaccination-rate-crosses-70/?sh=6ec2bb713ca2')

                cy.wait('@views')
                cy.get('.pageviews').then(ele => {
                    expect(ele.text().replace(/,/g, '')).to.equal(apiviews + ' views')

                })


            })
    })




    it('should number of views comes from api equal to one exist in front end page', () => {

        cy.intercept('GET', 'https://www.forbes.com/tamagotchi/v1/fetchLifetimeViews/?id=blogAndPostId/blog/post/50531-6163e1d68708d90006613a63').as('views')

        cy.visit('https://www.forbes.com/sites/siladityaray/2021/10/11/sydney-celebrates-freedom-day-after-nearly-four-months-of-covid-lockdown-as-vaccination-rate-crosses-70/?sh=6ec2bb713ca2')

        cy.wait('@views')

            .its('response')
            .then(response => {
                const viewsFromApi = response.body.views;

                cy.get('.pageviews').invoke('text').then(elementText => {
                    debugger;
                    // const viewFromPage=ele.text().replace(/,/g,'')
                    expect(elementText.replace(/,/g, '')).to.equal(`${viewsFromApi} views`)
                })

            })
    })
})




