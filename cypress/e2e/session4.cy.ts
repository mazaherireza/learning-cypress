describe("Session 4", () => {
  it("Asyncronous Process", () => {
    cy.visit("https://www.beiersdorf.com/meta-pages/contact/contact-form");
    cy.get("input[id='6d51e3c746904daea13d2bc151d29eee_company']")
      .type("NIVEA")
      .then((el) => {
        expect(el.val()).to.eq("NIVEA");
      });
  });

  it("API", () => {
    fetch("https://api.spacexdata.com/v3/missions")
      .then((response) => response.json())
      .then((missions) => {
        console.log(missions);
      });
  });

  it.only("Find a Specific Number", () => {
    const tryToFind = (num: Number) => {
      cy.get("#number")
        .should("not.be.empty")
        .invoke("text")
        .then(parseInt)
        .then((number) => {
          if (number === num) {
            cy.log(`Number ${num} found!`);
            return;
          } else {
            cy.wait(250);
            cy.reload();
            tryToFind(num);
          }
        });
    };
    cy.visit("/inde");
    tryToFind(1001);
  });
});
