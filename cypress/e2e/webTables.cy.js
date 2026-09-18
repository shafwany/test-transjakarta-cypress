import WebTablesPage from '../pageObjects/WebTablesPage';
import neatCsv from 'neat-csv';

describe('Technical Test Transjakarta - Web Tables Automation', () => {
    let userData = [];

    before(() => {
        cy.fixture('users.csv')
            .then(neatCsv)
            .then((data) => {
                userData = data;
            });
    });

    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
        WebTablesPage.visit();
    });

    it('4.1 Positive Test: Bulk Register Users from CSV', () => {
        userData.forEach((user) => {
            WebTablesPage.clickAdd();
            WebTablesPage.fillRegistrationForm(user);
            WebTablesPage.submitForm();
            WebTablesPage.verifyAndResetTable(user.email);
        });
    });

    it('4.2 Negative Test: Submit with Empty Email', () => {
        WebTablesPage.clickAdd();
        WebTablesPage.fillRegistrationForm({
            firstName: 'Budi',
            lastName: 'Santoso',
            email: '',
            age: '30',
            salary: '10000000',
            department: 'IT'
        });
        WebTablesPage.submitForm();

        cy.get('#userEmail:invalid').should('exist');
    });
});

