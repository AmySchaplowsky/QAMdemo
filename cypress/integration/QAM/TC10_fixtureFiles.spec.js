import { Login } from "../pageObjects";

describe("Login", () => {
  let loginPage;
  let userDetails;

  before(() => {
    loginPage = new Login();
  });

  beforeEach(() => {
    cy.fixture("userLoginDetails").then((user) => {
      userDetails = {
        ...user,
        password: atob(user.password),
      };
    });
  });

  it("Sign in", () => {
    cy.visit("/#/login");
    loginPage.email().type(userDetails.email);
    loginPage.password().type(userDetails.password);
    loginPage.signInButton().should("be.visible").click();
  });
});
