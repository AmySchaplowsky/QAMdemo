describe("Login", () => {
  it("Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.get("input[type='email']").type("amy.schaplowsky@gmail.com");
    cy.get("input[type='password']").type(
      atob(
        "Mi01ITBOPV47ITUhfDozfjp2Oi4ufGheSjYrKzl4PTpvKl5NRTVTIT0qfD03XyE9OCEtJXxvdDowOnYuLX4rODp6OUE7fF9z"
      )
    );
    cy.get(".btn").contains("Sign in").should("be.visible").click();
  });
});
