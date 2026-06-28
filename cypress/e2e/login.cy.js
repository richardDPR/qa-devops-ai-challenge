describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('https://www.demoblaze.com');
    cy.get('#login2').click();
    cy.get('#loginusername').type('testuser');
    cy.get('#loginpassword').type('password');
    cy.get('button[onclick="logIn()"]').click();
    cy.screenshot('login_test'); // genera login_test.png screenshot
  });
});
