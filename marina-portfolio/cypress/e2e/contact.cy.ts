describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should submit the contact form and display success feedback", () => {
    // Intercept the EmailJS request to prevent a real email from being sent
    cy.intercept("POST", "**/api/v1.0/email/send-form", {
      statusCode: 200,
      body: { success: true },
    }).as("sendEmail");

    // Handle the success alert
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Message sent successfully!");
    });

    // Navigate to Contact
    cy.contains("nav a", "Contact").click();
    cy.get("#contact").should("be.visible");

    // Fill in the contact form
    cy.get("#contact-form").within(() => {
      cy.get('input[name="from_name"]').type("Test User");
      cy.get('input[name="from_email"]').type("test@example.com");
      cy.get('textarea[name="message"]').type(
        "This is an automated test message.",
      );

      cy.get(".btn-submit").click();
    });

    // Verify the EmailJS request
    cy.wait("@sendEmail").then(({ request }) => {
      expect(request.body).to.include("Test User");
      expect(request.body).to.include("test@example.com");
      expect(request.body).to.include("This is an automated test message.");
    });

    // Verify the form has been reset
    cy.get('#contact-form input[name="from_name"]').should("have.value", "");
    cy.get('#contact-form input[name="from_email"]').should("have.value", "");
    cy.get('#contact-form textarea[name="message"]').should("have.value", "");

    // Verify the button returns to its original text
    cy.get(".btn-submit").should("have.text", "Submit");
  });
});
