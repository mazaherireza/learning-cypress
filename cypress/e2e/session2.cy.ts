describe("Session 2", () => {
    it("Contains", () => {
      cy.visit("https://www.beiersdorf.com/meta-pages/contact/contact-form");
      cy.get("input[id='6d51e3c746904daea13d2bc151d29eee_company']").type(
        "NIVEA"
      );
      cy.get("li > strong").contains("Related link");
    });

    it("Relationship", () => {
      cy.visit("https://www.beiersdorf.com/meta-pages/contact/contact-form");
      cy.get("form").children("[class='field radio']").first();
      cy.get(".col").children("[class='radio-option ']").first();
    });

  it("Index", () => {
    cy.visit("https://www.nivea.com/").get(".nx-region__label").eq(3);
    cy.visit("https://www.nivea.com/").get(".nx-region__label").last();
  });
});
