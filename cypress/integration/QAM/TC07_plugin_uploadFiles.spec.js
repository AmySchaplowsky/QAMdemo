describe("Working with plugins", () => {
  Cypress.config({ pageLoadTimeout: 100000 });

  it("File upload", () => {
    cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html");

    cy.get("[type='file']").attachFile("SampleFile.pdf");

    cy.get("[type='submit']").click();

    cy.get("p")
      .first()
      .then(($pel) => {
        expect($pel.text()).to.eq(
          "You've uploaded a file.  Your notes on the file were:\n"
        );
      });
  });
});
