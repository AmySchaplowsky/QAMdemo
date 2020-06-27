Given("I open Conduit login page", () => {
  cy.visit("/#/login");
});

When("I type in", (dataTable) => {
  dataTable.hashes().forEach((h) => {
    cy.get("input[type='email']").type(h.username);
    cy.get("input[type='password']").type(atob(h.password));
  });
});

When("I click on Sign in button", () => {
  cy.get(".btn").contains("Sign in").should("be.visible").click();
});

Then("{string} should be shown", (content) => {
  cy.contains(content, { timeout: 10000 }).should("be.visible");
});
