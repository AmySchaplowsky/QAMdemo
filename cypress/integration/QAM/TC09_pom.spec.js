import Login from "../pageObjects/login";

describe("Login", () => {
  it("Sign in", () => {
    const login = new Login();
    cy.visit("https://react-redux.realworld.io/#/login");
    login.email().type("amy.schaplowsky@gmail.com");
    login
      .password()
      .type(
        atob(
          "Mi01ITBOPV47ITUhfDozfjp2Oi4ufGheSjYrKzl4PTpvKl5NRTVTIT0qfD03XyE9OCEtJXxvdDowOnYuLX4rODp6OUE7fF9z"
        )
      );
    login.signInButton().should("be.visible").click();
  });
});
