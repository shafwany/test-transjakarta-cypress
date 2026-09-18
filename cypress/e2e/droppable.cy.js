import DroppablePage from '../pageObjects/DroppablePage';

describe('Technical Test Transjakarta - Droppable Bonus Test', () => {

  beforeEach(() => {
    DroppablePage.visit();
  });

  it('5. Nilai Plus (Droppable)', () => {
    DroppablePage.dragAndDrop();
    DroppablePage.verifyDropped();
  });

});