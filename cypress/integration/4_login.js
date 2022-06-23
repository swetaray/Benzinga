describe("Login negative", function () {
    before(() => {
        Cypress.on("uncaught:exception", (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false;
        });
      });
    it("error message for no email", function () {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit(Cypress.env("url"), { failOnStatusCode: false });
      
      cy.get("[label='Password']").type("password1");
      cy.get(".action-buttons").click();
      cy.get(".signin-error").should(
        "contain",
        "There was an error signing in, please try again."
      );
    });
  
    it("error message for no password", function () {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit(Cypress.env("url"), { failOnStatusCode: false });
      
      cy.get("[label='Email']").type("swetacray@gmail.com");
      cy.get(".action-buttons").click();
      cy.get(".signin-error").should(
        "contain",
        "There was an error signing in, please try again."
      );
    });
    it("error message for incorrect password", function () {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit(Cypress.env("url"), { failOnStatusCode: false });
     
      cy.get("[label='Email']").type("swetacray@gmail.com");
      cy.get("[label='Password']").type("password");
      cy.get(".action-buttons").click();
      cy.get(".signin-error").should(
        "contain",
        "There was an error signing in, please try again."
      );
    });
    it("error message for incorrect email", function () {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit(Cypress.env("url"), { failOnStatusCode: false });
      
      cy.get("[label='Email']").type("swetachampati@gmail.com");
      cy.get("[label='Password']").type("password");
      cy.get(".action-buttons").click();
      cy.get(".signin-error").should(
        "contain",
        "There was an error signing in, please try again."
      );
    });
    it("Blank email and password", function () {
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit(Cypress.env("url"), { failOnStatusCode: false });
    
  
      cy.get(".action-buttons").click();
      cy.get(".signin-error").should(
        "contain",
        "There was an error signing in, please try again."
      );
      
    });
    
  });
  
