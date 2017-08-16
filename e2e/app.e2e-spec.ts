import { SgyAppPage } from './app.po';

describe('sgy-app App', () => {
  let page: SgyAppPage;

  beforeEach(() => {
    page = new SgyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
