import { ComponentShopPage } from './app.po';

describe('component-shop App', () => {
  let page: ComponentShopPage;

  beforeEach(() => {
    page = new ComponentShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
