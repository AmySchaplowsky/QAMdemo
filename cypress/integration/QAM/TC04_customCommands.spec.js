describe("Create and mark-unmark as favorite", () => {
  before(() => {
    cy.signIn();
  });

  after(() => {
    cy.signIn();
    cy.get("ul.navbar-nav").children().contains("AmySchaplowsky").click();
    cy.get("h1").contains("Test").first().click();
    cy.get("button.btn-outline-danger").click();
  });

  it("Creat a post", () => {
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
    cy.get("ul.nav-pills").children().contains("Favorited Articles").click();
    cy.url().should("include", "favorites");
    cy.get(".ion-heart").first().click();
    cy.reload();
    cy.contains("No articles are here... yet.").should("be.visible");
    cy.get("ul.nav-pills").children().contains("My Articles").click();
  });
});
