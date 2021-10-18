class Source {
    // selectors
    percentNUmber = 'a.percent-link[aria-label="WGO"] span';
    ticker = 'a.percent-link span.ticker-red';

    //paths
    pagePath = 'https://www.forbes.com/sites/sergeiklebnikov/2020/04/16/here-are-29-get-out-and-go-stocks-for-the-end-of-coronavirus-quarantine/';
    interceptPath = 'https://www.forbes.com/xignite/?identifier=WGO';
}

export const source = new Source();