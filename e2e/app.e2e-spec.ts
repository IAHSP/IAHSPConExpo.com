import { IahspconexpoPage } from './app.po';

describe('iahspconexpo App', () => {
  let page: IahspconexpoPage;

  beforeEach(() => {
    page = new IahspconexpoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
