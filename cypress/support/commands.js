import "cypress-file-upload";

Cypress.Commands.add("signIn", () => {
  cy.visit("/#/login");
  cy.title().should("eq", "Conduit");
  cy.location("protocol").should("eq", "https:");
  cy.get("form").within(($form) => {
    // cy.get() will only search for elements within the form, not within the entire document
    cy.get("input[type='email']").type("amy.schaplowsky@gmail.com");
    cy.get("input[type='password']").type(
      atob(
        "Mi01ITBOPV47ITUhfDozfjp2Oi4ufGheSjYrKzl4PTpvKl5NRTVTIT0qfD03XyE9OCEtJXxvdDowOnYuLX4rODp6OUE7fF9z"
      )
    );
    cy.root().submit(); // submits the form yielded from 'within'
  });
  cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
});
