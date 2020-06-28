describe("Read-Write files content", () => {
  it("Write to a file", () => {
    cy.writeFile("sampleFile.txt", "Hello, world!\n");
    cy.writeFile("sampleFile.txt", "I am Amy", { flag: "a+" });
  });

  it("Read from a file", () => {
    cy.readFile("sampleFile.txt").should("include", "Hello, world!")
  });
});
