import { QuizmodulePage } from './app.po';

describe('quizmodule App', function() {
  let page: QuizmodulePage;

  beforeEach(() => {
    page = new QuizmodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
