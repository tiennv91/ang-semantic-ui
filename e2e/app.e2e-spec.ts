import { AngSematicUiPage } from './app.po';

describe('ang-sematic-ui App', () => {
  let page: AngSematicUiPage;

  beforeEach(() => {
    page = new AngSematicUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
