/**
 * This is Test Definition Object for UI page
 *
 * It used for define all of impact points
 * of real test pages
 */
var web_driver;

const message_field = 'div.message';
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
