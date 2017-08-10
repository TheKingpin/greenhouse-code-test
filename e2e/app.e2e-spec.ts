import { GreenhouseCodeTestPage } from './app.po';

describe('greenhouse-code-test App', () => {
  let page: GreenhouseCodeTestPage;

  beforeEach(() => {
    page = new GreenhouseCodeTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
