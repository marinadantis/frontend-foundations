describe("Hero Section", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the correct profile information and links", () => {
    // Verify hero section is visible
    cy.get("#hero").should("be.visible");

    // Verify profile image
    cy.get("#hero img")
      .should("be.visible")
      .and(($img) => {
        expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
      });

    // Verify name
    cy.get('[data-test="fullname"]').should("contain.text", "Marina Dantis");

    // Verify professional title
    cy.get('[data-test="position"]').should(
      "contain.text",
      "Frontend Developer",
    );

    // Verify LinkedIn link
    cy.get('#hero .social-links a[href*="linkedin.com"]')
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "linkedin.com");

    // Verify GitHub link
    cy.get('#hero .social-links a[href*="github.com"]')
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "github.com");

    // Verify phone link
    cy.get('#hero .profile-details a[href^="tel:"]')
      .should("be.visible")
      .and("have.attr", "href");

    // Verify email link
    cy.get('#hero .profile-details a[href^="mailto:"]')
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "@");

    // Verify location
    cy.get('#hero [data-test="location-value"]').should(
      "contain.text",
      "Dubai, UAE",
    );

    // Verify birthday
    cy.get('#hero [data-test="birthday-value"]').should(
      "contain.text",
      "August 18, 1990",
    );
  });

  it("should provide a valid CV download link", () => {
    // Locate the Download CV link
    cy.contains("a", "Download CV")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", ".pdf");
  });
});
