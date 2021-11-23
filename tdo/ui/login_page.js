/**
 * This is Test Definition Object for UI page
 *
 * It used for define all of impact points
 * of real test pages
 */
var web_driver;

/**
 * Set the current web driver
 */
module.exports.setWebDriver = (current_driver) => {
    web_driver = current_driver;
    return this;
};

/**
 * Page elements
 */
function loginField() { return web_driver.getElementByCss('#login_field'); }
function passwordField() { return web_driver.getElementByXpath('/html/body/form/input[2]'); }
function formButton() { return web_driver.getElementByCss('#submit'); }

/**
 * Get signin page
 */
module.exports.loadPage = (url) => web_driver.loadPage(url);

/**
 * Set the login field value
 */
module.exports.setLogin = (login) => web_driver.setFieldValue(loginField(), login);

/**
 * Getter for login field
 */
module.exports.getLoginValue = () => web_driver.getFieldValue(loginField());

/**
 * Set the password field value
 */
module.exports.setPassword = (pwd) => web_driver.setFieldValue(passwordField(), pwd);

/**
 * Getter for password field
 */
module.exports.getPasswordValue = () => web_driver.getFieldValue(passwordField());

/**
 * send signin form
 */
module.exports.sendForm = () => web_driver.clickElement(formButton());
