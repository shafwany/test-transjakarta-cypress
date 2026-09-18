class WebTablesPage {
  // Selectors
  get addButton() { return cy.get('#addNewRecordButton'); }
  get firstNameInput() { return cy.get('#firstName'); }
  get lastNameInput() { return cy.get('#lastName'); }
  get emailInput() { return cy.get('#userEmail'); }
  get ageInput() { return cy.get('#age'); }
  get salaryInput() { return cy.get('#salary'); }
  get departmentInput() { return cy.get('#department'); }
  get submitButton() { return cy.get('#submit'); }
  get searchBox() { return cy.get('#searchBox'); }
  get modalContent() { return cy.get('.modal-content'); }
  get tableRows() { return cy.get('.rt-tr-group'); }

  // Actions
  visit() {
    cy.visit('/webtables');
  }

  clickAdd() {
    // Pastikan modal pendaftaran lama tidak ada sebelum klik Add
    this.modalContent.should('not.exist');
    this.addButton.click({ force: true });
  }

  fillRegistrationForm(user) {
    if (user.firstName) this.firstNameInput.clear().type(user.firstName);
    if (user.lastName) this.lastNameInput.clear().type(user.lastName);
    if (user.email) this.emailInput.clear().type(user.email);
    if (user.age) this.ageInput.clear().type(user.age);
    if (user.salary) this.salaryInput.clear().type(user.salary);
    if (user.department) this.departmentInput.clear().type(user.department);
  }

  submitForm() {
    this.submitButton.click({ force: true });
  }

  verifyAndResetTable(email) {
    // 1. Tunggu form close 
    this.modalContent.should('not.exist');

    // 2. Search email user baru
    this.searchBox.clear().type(email);

    // 3. Reset search box
    this.searchBox.clear();
  }
}

export default new WebTablesPage();