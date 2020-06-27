describe("Create and mark-unmark as favorite", () => {
  it("Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.title().should("eq", "Conduit");
    cy.location("protocol").should("eq", "https:");
    cy.get("form").within(($form) => {
      // cy.get() will only search for elements within the form, not within the entire document
      cy.get("input[type='email']").type("amy.schaplowsky@gmail.com");
      cy.get("input[type='password']").type(atob("Mi01ITBOPV47ITUhfDozfjp2Oi4ufGheSjYrKzl4PTpvKl5NRTVTIT0qfD03XyE9OCEtJXxvdDowOnYuLX4rODp6OUE7fF9z"));
      cy.root().submit(); // submits the form yielded from 'within'
    });
    cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
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
    cy.contains("Favorited Articles").click();
    cy.url().should("include", "favorites");
    cy.get(".ion-heart").first().click();
    cy.reload();
    cy.contains("No articles are here... yet.").should("be.visible");
    cy.go("back");
  });
});
