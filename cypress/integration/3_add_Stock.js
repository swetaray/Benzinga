describe("add stock", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    it("add a stock to the watchlist", function () {
      cy.get(".navbar-actions > .search-bar > .search-input").type("asdn");
      cy.get("tbody > :nth-child(1) > :nth-child(1)").click();
      cy.get(".modal-btn-yes").click();
      cy.get(".data-table-data-symbol").should("contain", "ASDN");
      cy.get(".data-table-row > :nth-child(2)").should("contain", "$");
      cy.get(".data-table-row > :nth-child(3)").should("contain", "$");
      cy.get(".data-table-row > :nth-child(4)").should("contain", "%");
      cy.get(".data-table-row > :nth-child(5)").should((value) => {
        expect(Number.isInteger(+value), "input should be an integer").to.eq(
          false
        );
      });
    });
  });
});
