describe('Accessibility Test', () => {
  it('Visits home page', () => {
    cy.visit('https://www.dev-wayne-wjg6iha-g2s6eyb7nc2mu.us.platformsh.site', {
      timeout: 30000,
    })
    //cy.axeAnalyze()
  })
})