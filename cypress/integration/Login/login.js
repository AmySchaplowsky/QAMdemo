import Login from "../pageObjects/login";

Given("I open Conduit login page", () => {
  cy.visit("/#/login");
});

When("I type in", (dataTable) => {
  const login = new Login();
  dataTable.hashes().forEach((h) => {
    login.email().type(h.username);
    login.password().type(atob(h.password));
  });
});

When("I click on Sign in button", () => {
  const login = new Login();
  login.signInButton().should("be.visible").click();
});

Then("{string} should be shown", (content) => {
  cy.contains(content, { timeout: 10000 }).should("be.visible");
});
