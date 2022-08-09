/// <reference types="cypress" />

context("E2E", () => {
  describe("website", () => {
    it("loads correctly", () => {
      cy.visit("http://localhost:3000");
      cy.get("#infoText").should("be.visible");
      cy.get("#username").contains("Lokalesen");
      cy.get("#NAVaccordion").should("be.visible");
      cy.get("#navds-id-1").should("be.visible");
      cy.get("#navds-id-2").should("be.visible");
      cy.get("#navds-id-3").should("be.visible");
    });

    it("contains 'Send inn forslag', and is clickable", () => {
      cy.get("#forslagsKnapp").click();
      cy.get("#forslagsModal").should("be.visible");
      cy.get("#forslagSendInn").click();
    });

    it("re-routes to a card", () => {
      cy.get(".grid:first-child").click();
      cy.get("#likerKnapp").should("be.visible");
      cy.get("#tilbakeKnapp").should("be.visible");
    });

    it("votes correctly", () => {
      cy.get("#likerKnapp:first-Child")
        .invoke("text")
        .then((text1) => {
          // do more work here

          // click the button which changes the div's text
          cy.get("#likerKnapp").click();

          // grab the div again and compare its previous text
          // to the current text
          cy.get("#likerKnapp:first-Child")
            .invoke("text")
            .should((text2) => {
              expect(text1).not.to.eq(text2);
            });
        });
    });

    it("successfully returns to the front page", () => {
      cy.get("#tilbakeKnapp").click();
      cy.get("#infoText").should("be.visible");
    });

    it("renders the roadmap", () => {
      cy.get("#navds-id-2").click();
      cy.get("#timeLine").should("be.visible");
    });
  });
});
