// cypress/integration/contextApi.spec.js
describe('Context API Demo', () => {
    it('Displays default value', () => {
      cy.visit('/');
      cy.contains('Data from Context: Default Value');
    });
  
    it('Updates data on button click', () => {
      cy.visit('/');
      cy.get('button').click();
      cy.contains('Data from Context: New Value');
    });
  });
  