import { internet } from "faker";

describe("register a new user", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("error message for no email", function () {
    cy.get(".modal-btn-cancel").click();
    cy.get('[href="#"]').click();
    cy.get("#user-register").click();
    cy.get('[label="Email"]').clear();
    cy.get(".signin-form-row > input").clear().type("password1");
    cy.get(".action-buttons").click();
    cy.get(".signin-error").should(
      "contain",
      "There was an error with your registration, please try again."
    );
  });
  it("error message for no password", function () {
   
  cy.get('[label="Email"]').clear().type("abcd@gmail.com");
  cy.get(".action-buttons").click();
  cy.get(".signin-error").should(
    "contain",
    "There was an error with your registration, please try again."
  );});

  it("error message for invalid email id",function(){}); 
  it("error message for incorrect password", function () {});
  it("error message for incorrect email", function () {});
  it("Blank email and password", function () {});
  it("register new user", function () {
    const faker = require("faker");
    const email = faker.internet.email();
    const password = faker.internet.password();
    cy.get('[label="Email"]').clear().type(email);
    cy.get(".signin-form-row > input").clear().type(password);
    cy.get(".action-buttons").click();
  });
});
