describe("User Takes Quiz", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should start the quiz and display the first question", () => {
    
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
  it("should answer questions and complete the quiz", () => {
    
    cy.get("button").contains("Start Quiz").click();

    // Answer questions
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    
    // Verify the quiz completion
    cy.get(".alert-success").should("be.visible").and("contain", "Your score");
  });

  it("should restart the quiz after completion", () => {
    
    cy.get("button").contains("Start Quiz").click();

    // Answer questions
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }

    // Restart the quiz
    cy.get("button").contains("Take New Quiz").click();

    // Verify the quiz is restarted
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
});
