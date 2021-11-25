/**
 * Web driver wrapper
 *
 * Used for integration with concrete web driver (Selenium, Playwrite etc)
 */

/**
 * Selenium initialization
 */
const webdriver = require("selenium-webdriver");
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless']});
chromeCapabilities.setPageLoadStrategy('eager');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();

driver.manage().setTimeouts({implicit: 20000, pageLoad: 10000});
driver.manage().window().maximize();

/**
 * Create all needed functions
 *
 * See the pseudointerface (ui_wrapper.js)
 */
module.exports.loadPage = (url) => driver.get(url);

module.exports.getElementByCss = (selector) => driver.findElement(webdriver.By.css(selector));

module.exports.getElementByXpath = (selector) => driver.findElement(webdriver.By.xpath(selector));

module.exports.setFieldValue = (field, value) => field.sendKeys(value);

module.exports.getFieldValue = (field) => field.getAttribute('value');

module.exports.clickElement = (el) => el.click();

module.exports.getInnerText = (el) => el.getText();

/**
 * Element visibility awaiting
 */
module.exports.awaitVisible = (duration, selector) => {
    var el = driver.wait(
        webdriver.until.elementIsVisible(webdriver.By.css(selector)),
        duration
    );
    return el;
}

/**
 * Close window n quit session
 */
module.exports.close = () => { driver.close(); }
module.exports.quit = () => { driver.quit(); }