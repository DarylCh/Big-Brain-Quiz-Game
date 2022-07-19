import "cypress-localstorage-commands";

context('Signup flow', () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
    cy.visit('localhost:3000/register');
  });

  beforeEach(() => {
    cy.wait(2000);
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Successfully signs up an account', () => {
    const name = 'John';
    const email = 'john@email.com';
    const password = 'password';

    cy.get('input[id=name]')
      .focus()
      .type(name);

    cy.get('input[id=email]')
      .focus()
      .type(email);

    cy.get('input[id=password]')
      .focus()
      .type(password);

    cy.get('button[id=Submit]')
      .click();
    
    cy.url().should('eq', 'http://localhost:3000/home');
  });

  it('Creates a new game successfully', () => {
    const title = 'Test Game';
    cy.get('input[id=game-title]')
      .focus()
      .type(title);
    
    cy.get('button[id=create-game-button]')
      .should('be.visible')
      .click();

    cy.get('.game')
      .should('be.visible')
      .should('have.length', 1);

    cy.get(".game-name")
      .should('be.visible')
      .should('have.length', 1)
      .contains(title);
  });

  it('Starts a new game successfully', () => {
    const title = 'Test Game';
    // Is this needed?
    cy.get('.game')
      .should('be.visible')
      .should('have.length', 1);

    cy.get(".game-name")
      .should('be.visible')
      .should('have.length', 1)
      .contains(title);

    cy.get('.start-button')
      .should('be.visible')
      .should('have.length', 1)
      .click();

    cy.get('h2[id=game-popup]')
      .should('be.visible')
      .contains('Game Started!');

    cy.get('button[id=close-button]')
      .should('be.visible')
      .click();
  })

  it('Stops the game successfully', () => {
    cy.get('.stop-button')
      .should('be.visible')
      .should('have.length', 1)
      .click();
    
    cy.get('h2[id=game-popup]')
      .should('be.visible')
      .contains('Game Stopped!');
  })

  it('Loads the results page successfully', () => {
    cy.get('button[id=yes-button]')
      .should('be.visible')
      .click();

    cy.url()
      .should('include', 'http://localhost:3000/edit/game/')
      .should('include', 'results');
  })

  it('Logs out of the client successfully', () => {
    cy.get('a[id=nav-logout]')
      .should('be.visible')
      .click();
    cy.url()
      .should('eq', 'http://localhost:3000/login');
  })

  it('logs back into the client successfully', () => {
    const email = 'john@email.com';
    const password = 'password';
    cy.get('input[id=email]')
      .focus()
      .type(email);

    cy.get('input[id=password]')
      .focus()
      .type(password);

    cy.get('button[id=login-button]')
      .click();
    
    cy.url().should('eq', 'http://localhost:3000/home');
  })

});