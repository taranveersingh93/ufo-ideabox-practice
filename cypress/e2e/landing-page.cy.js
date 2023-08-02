describe('landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/sightings', {
      statusCode: 200,
      body: [
        {
            "id": 1,
            "location": "Denver, CO",
            "description": "Bright lights over Cheesman Park"
        },
        {
            "id": 2,
            "location": "Chicago, IL",
            "description": "Silver shape hovering low over the Chicago River, darted away with no sound"
        },
        {
            "id": 3,
            "location": "Louisville, KY",
            "description": "Bright light and humming noise accompanied by high atmospheric pressure, localized over one house"
        }
    ]
    }).as('getSightings')
    cy.visit('http://localhost:3000')
    cy.wait('@getSightings')
  })
  it('shows the right elements upon landing', () => {
    cy.get('h1').contains('UFO Sightings')
    cy.get('form').children().should('have.length', 3)
    cy.get('.sightings-container').children().should('have.length', 3)
    cy.get('.sighting-card').eq(0).find('p').eq(0).contains('Location: Denver, CO')
    cy.get('.sighting-card').eq(0).find('p').eq(1).contains('Description: Bright lights over Cheesman Park')
  })
})