describe("Login", () => {
  it("Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.get("input[type='email']").type("amy.schaplowsky@gmail.com");
    cy.get("input[type='password']").type(atob("VG9kYXkxMjMh"));
    cy.get(".btn").contains("Sign in").should("be.visible").click();
  });
});
