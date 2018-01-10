import { AppPage } from './app.po';

describe('smart-filter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Smart Filter!');
  });
  it('should display instruction messaging', () => {
    page.navigateTo();
    expect(page.getMessageText()).toEqual('Start typing your message here:');
  });
});
