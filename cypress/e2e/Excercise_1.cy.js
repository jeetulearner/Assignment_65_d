it('Google Search',function(){

cy.visit("https://smartclient.com/smartgwt/showcase/#featured_tile_filtering")
cy.get('#isc_2Q').type('a')
//cy.get('#isc_2I').invoke("attr","class","hSliderThumbdown")
//cy.get('#isc_2I').invoke("attr","style","left:137px")
//cy.get('#isc_2N').invoke("attr","style","width:143px")
//cy.get('#isc_2N').click()
//cy.get('#isc_2N').invoke("attr","style","width:143px")
const currentValue = 60
const targetValue  = 40
const decrement = 1
const steps = (currentValue-targetValue)/decrement
const arrows = '{leftarrow}'.repeat(steps)
cy.get('#isc_2I').click().type(arrows)
const steps1 = 12
const arrows1 = '{rightarrow}'.repeat(steps1)
cy.get('#isc_2I').click().type(arrows1)
cy.get('#isc_3E').click().type('L',{ force: true }).type('{Enter}',{ force: true })
cy.get('.checkboxFalse').click()
cy.get('#isc_3S > table > tbody > tr > .button').click()
cy.get('div.tileGrid').children('[style*="visibility: inherit"]').its('length').should('be.greaterThan',12)

})