import { TestTaskOrdersAndProductsPage } from './app.po';

describe('test-task-orders-and-products App', () => {
  let page: TestTaskOrdersAndProductsPage;

  beforeEach(() => {
    page = new TestTaskOrdersAndProductsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
