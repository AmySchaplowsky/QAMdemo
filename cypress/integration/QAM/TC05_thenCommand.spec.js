describe("Create and mark-unmark as favorite", () => {
  Cypress.config("pageLoadTimeout", 100000);

  before(() => {
    cy.signIn();
  });

  after(() => {
    cy.signIn();
    cy.get("ul.navbar-nav").children().contains("AmySchaplowsky").click();
    cy.get("h1").contains("Test").first().click();
    cy.get("button.btn-outline-danger").click();
  });

  it("Create a post", () => {
    cy.get("ul.navbar-nav").children().contains("New Post").click();
    cy.hash().should("include", "#/editor");
    cy.get("form").within(($form) => {
      cy.get("input").first().type("Test");
      cy.get("input").eq(1).type("Test 1");
      cy.get("textarea").last().type("Test 2");
      cy.contains("Publish Article").click();
    });
    cy.url().should("include", "article");
  });

  it("Mark-unmark as favorite", () => {
    cy.get("ul.navbar-nav").children().contains("AmySchaplowsky").click();
    cy.contains("My Articles").should("be.visible");
    cy.get(".ion-heart").first().click();
    cy.contains("Favorited Articles").click();
    cy.url().should("include", "favorites");
    cy.get(".btn-primary")
      .first()
      .then(($fav) => {
        const favCount = $fav.text();
        expect(parseInt(favCount)).to.eq(1);
      })
      .click();
    cy.reload();
    cy.contains("No articles are here... yet.").should("be.visible");
    cy.go("back");
  });
});
