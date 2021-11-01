class Source {
    // selectors
    searchBar = '//input[@id="twotabsearchtextbox"]';
    bags = '//div[contains(@class,"s-result-item") and contains(@class, "s-asin")]';

    //paths
    addToCart = '//*[@id="add-to-cart-button"]';
    cartItem = '//div[@id="nav-cart-count-container"]';
    bagContainer='//div[contains(@class,"sc-list-item") and contains(@class,"a-row")]';
    sinIn='//*[@id="nav-link-accountList"]';
    nameField='//input[@id="ap_customer_name"]';
    email='//input[@id="ap_email"]';
    password='//input[@id="ap_password"]';
    rePassword='//input[@id="ap_password_check"]';
    createAccount='//input[@id="continue"]';
}

export const source = new Source();