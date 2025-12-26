describe("Session 3", () => {
  it("Keyboard", () => {
    cy.visit(
      "https://www.novonordisk.com/contact-us/report-a-security-vulnerability.html"
    );

    cy.get('input[name="productName"]')
      .type("Insulin")
      .type("{selectAll}{del}")
      .type("INSULIN ".repeat(8), {
        delay: 100,
      });
  });

  it("Mouse", () => {
    cy.visit(
      "https://www.novonordisk.com/contact-us/report-a-security-vulnerability.html"
    );

    cy.get('input[type="radio"]')
      .click({ multiple: true })
      .should("be.checked");

    // is not visible because it has CSS property: visibility: hidden

    cy.get("body").rightclick("top");

    cy.visit("https://www.beiersdorf.com/");
    cy.get(".meta-navigation").children().eq(2).click({ ctrlKey: true });
  });
});
