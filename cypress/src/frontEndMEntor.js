class Source {
    // desktop selectors
    footerElements = '//div[contains(@class,"Footer__Upper-m1yoyo-1")]//li //a';

    challenges = '//div[contains(@class,"PreviewImage-sc-106m51d-0")]';

    firstChallenge = '//li[contains(@class,"DesignPreview__PreviewTab-sc-13bwiwi-3")]';

    designs = '//li[contains(@class,"DesignPreview__PreviewTab-sc-13bwiwi-3")]';

    faq = '//a[@href="/faq"]';

    signs = '//div[contains(@class,"dDKGgP")]//i';

    paragraphs = '//div[contains(@class,"Markdown__Wrapper-sc-1b7bs12-0")]';

    urlsWords = ['pro', 'challenges', 'solutions', 'resources', 'contact', 'slack', 'faq', 'medium', 'twitter', 'linkedin', 'facebook'];

}

export const source = new Source();