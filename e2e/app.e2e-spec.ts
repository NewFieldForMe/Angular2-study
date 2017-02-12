import { CareerSheetFrontPage } from './app.po';

describe('career-sheet-front App', function() {
  let page: CareerSheetFrontPage;

  beforeEach(() => {
    page = new CareerSheetFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
