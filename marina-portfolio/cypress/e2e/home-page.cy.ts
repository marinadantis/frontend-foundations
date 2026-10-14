describe("Home Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to all main sections of the portfolio", () => {
    // Verify the portfolio loads
    cy.get("body").should("be.visible");

    // Navigate to About
    cy.contains("nav a", "About").click();
    cy.get("#about").should("be.visible");

    // Navigate to Resume
    cy.contains("nav a", "Resume").click();
    cy.get("#resume").should("be.visible");

    // Navigate to Projects
    cy.contains("nav a", "Projects").click();
    cy.get("#projects").should("be.visible");

    // Navigate to Contact
    cy.contains("nav a", "Contact").click();
    cy.get("#contact").should("be.visible");
  });

  it("should provide a valid CV download link", () => {
    // Locate the Download CV link
    cy.contains("a", "Download CV")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", ".pdf");
  });
});
