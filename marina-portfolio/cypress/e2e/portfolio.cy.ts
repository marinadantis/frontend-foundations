describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the portfolio page", () => {
    cy.get('[data-test="name"]').should("have.text", "Marina Dantis");
    cy.get('[data-test="position"]').should("have.text", "Frontend Developer");
  });
});
