export class Login {
  email() {
    return cy.get("input[type='email']");
  }
  password() {
    return cy.get("input[type='password']");
  }
  signInButton() {
    return cy.get(".btn").contains("Sign in");
  }
}
