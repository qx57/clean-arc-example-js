/**
 * This is Test Definition Object for UI page
 *
 * It used for define all of impact points
 * of real test pages
 */
var web_driver;

const message_field = '#root > div > aside > div.AuthDrawer_footer__3gBbc > div > div > span.styles_typography__3DAh1.styles__14__3v4Rk.styles_body_accent__3YOh7';
const default_avl = 30;

/**
 * Set the current web driver
 */
module.exports.setWebDriver = (current_driver) => {
    web_driver = current_driver;
    return this;
};

/**
 * initiate page object state after loading
 */
module.exports.init = () => web_driver.awaitVisible(default_avl, message_field);

/**
 * Something do
 */
module.exports.getMessage = () => web_driver.getInnerText(web_driver.getElementByCss(message_field));

/**
 * Page elements
 */
function exitButton() { return web_driver.getElementByCss('#root > div > aside > div.AuthDrawer_footer__3gBbc > button'); }

/**
 * send signin form
 */
module.exports.exitApp = () => web_driver.clickElement(exitButton());