describe("watchlist", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("add a watchlist", function () {
    cy.get(".CloseButton__ButtonElement-sc-79mh24-0 > svg").click();
    cy.get(".modal-body > div > input").type("watch1");
    cy.get(".modal-btn-yes").click();
    cy.get(".watchlist-selected-item").should("contain", "watch1").click();
  });
 
});
