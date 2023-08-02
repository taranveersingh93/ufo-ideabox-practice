describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/sightings', {
      statusCode: 201,
      body: {
        "location": "Delhi",
        "description": "what on earth was that?",
        "id": 4
    }
    }).as('postSighting')
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
    }).as('getSighting')
    cy.visit('localhost:3000')
    cy.wait('@getSighting')
  })
  it('enters form data and verifies', () => {
    cy.get('.location-input').type('Del').should('have.value', 'Del').type('hi').should('have.value', 'Delhi')
    cy.get('.description-input').type('what on earth was that?').should('have.value', 'what on earth was that?')
    cy.get('button').click();
    cy.wait('@postSighting')
    cy.get('.sightings-container').children().should('have.length', 4)
    cy.get('.sighting-card').eq(3).find('p').eq(0).contains('Location: Delhi')
    cy.get('.sighting-card').eq(3).find('p').eq(1).contains('Description: what on earth was that?')
  })
})