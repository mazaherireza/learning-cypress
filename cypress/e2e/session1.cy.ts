describe("Session 1", () => {
  it("Visit Università Degli Studi Di Milano", () => {
    cy.visit("https://www.unimi.it/");
  });

  it("Google 'Learning Cypress'", () => {
    cy.visit("https://google.com/");
    cy.get("textarea[name=q]").type("Learning Cypress{enter}");
  });

  it("Check Title of Peeyade", () => {
    cy.visit("https://peeyade.com/");
    cy.title().should("include", "پیاده");
  });
});
