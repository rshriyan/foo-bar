import { HerokuDeployPage } from './app.po';

describe('heroku-deploy App', () => {
  let page: HerokuDeployPage;

  beforeEach(() => {
    page = new HerokuDeployPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
