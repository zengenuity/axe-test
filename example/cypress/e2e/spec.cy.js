describe('My First Test', () => {
  it('Visits home page', () => {
    cy.visit('https://www.gurneysresorts.com')
    //cy.axeAnalyze()
    cy.visit('https://www.gurneysresorts.com/montauk')
    //cy.axeAnalyze()
  })
})