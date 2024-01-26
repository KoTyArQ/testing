
beforeEach(() => {
  cy.visit('https://www.saucedemo.com/');
})
describe('filter_test', () => {
  it('passes', () => {
    cy.get('#user-name')
    .type('standard_user').should('have.value', 'standard_user')
    cy.get('#password')
    .type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('za')
    cy.get('.product_sort_container').select('lohi')
    cy.get('.product_sort_container').select('hilo')
    cy.get('.product_sort_container').select('az')
  })
})
describe('login', () => {
  it('passes', () => {
    cy.get('#login-button').click()
    cy.get('#user-name')
    .type('standard_user').should('have.value', 'standard_user')
    cy.get('#password')
    .type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get('#login-button').click()
    // cy.get('#user-name').type('locked_out_user').should('have.value', 'locked_out_user')
    // cy.get('#password')
    // .type('secret_sauce').should('have.value', 'secret_sauce')
    // cy.get('#login-button').click()
    // cy.get('#user-name').clear()
    // cy.get('#password').clear()
    // cy.get('#user-name')
    // .type('problem_user').should('have.value', 'problem_user')
    // cy.get('#password')
    // .type('secret_sauce').should('have.value', 'secret_sauce')
    // cy.get('#login-button').click()
    // cy.get('#react-burger-menu-btn').click()
    // cy.get('#logout_sidebar_link').click()
    // cy.get('#user-name')
    // .type('performance_glitch_user').should('have.value', 'performance_glitch_user')
    // cy.get('#password')
    // .type('secret_sauce').should('have.value', 'secret_sauce')
    // cy.get('#login-button').click()
    // cy.wait(1500);
    // cy.get('#react-burger-menu-btn').click()
    // cy.get('#logout_sidebar_link').click()
    // cy.get('#user-name')
    // .type('error_user').should('have.value', 'error_user')
    // cy.get('#password')
    // .type('secret_sauce').should('have.value', 'secret_sauce')
    // cy.get('#login-button').click()
    // cy.get('#react-burger-menu-btn').click()
    // cy.get('#logout_sidebar_link').click()
    // cy.get('#user-name')
    // .type('visual_user').should('have.value', 'visual_user')
    // cy.get('#password')
    // .type('secret_sauce').should('have.value', 'secret_sauce')
    // cy.get('#login-button').click()
    // cy.wait(500);
    // cy.get('#react-burger-menu-btn').click()
    // cy.get('#logout_sidebar_link').click()
  })
})
describe('checkout', () => {
  it('passes', () => {
    cy.get('#user-name')
    .type('standard_user').should('have.value', 'standard_user')
    cy.get('#password')
    .type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('First_name')
    cy.get('#last-name').type('last_name')
    cy.get('#postal-code').type('89432112')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.get('#back-to-products').click()
    
  })
})
describe('delete_items', () => {
  it('passes', () => {
    cy.get('#user-name')
    .type('standard_user').should('have.value', 'standard_user')
    cy.get('#password')
    .type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-fleece-jacket').click()
    cy.get('#remove-sauce-labs-bike-light').click()

    cy.get('#continue-shopping').click()

  })
})

describe('access_without_login', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/inventory.html');

    cy.visit('https://www.saucedemo.com/cart.html');
    cy.visit('https://www.saucedemo.com/inventory.html');
  })
})
describe('sidemenu_check', () => {
  it('passes', () => {
    cy.get('#user-name').type('standard_user'); //Login on the website
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click()

    cy.get('.bm-burger-button > button').click(); //Open the menu and verify the assertion
    cy.get('.bm-menu').should('exist');
    cy.wait(500);
    cy.get('.bm-cross-button > button').click(); //Close the menu and verify the assertion
    cy.get('.bm-menu').should('not.be.visible');
  })
})