/**
 * Example test class for UI tests with Selenium web driver
 *
 */

/**
 * Get environment settings
 */
var settings = require.main.require('core/core').settings;

/**
 * Get common matcher
 */
var assert = require.main.require('core/core').assert;

/**
 * Get methods of base test framework
 */
var describe = require.main.require('core/core').describe;
var it = require.main.require('core/core').it;

/**
 * Common methods
 * F**king Selenium - use async step only!
 */
var step = require.main.require('core/core').asyncStep;

/**
 * Depend context
 */
var context = require('./context/ui_context');


/**
 * Test data
 * You may move it to environment properties or create data creator
 * like Environment Creator for storaging it
 */
var test_user = {
    login: "example_login",
    password: "very_strong_password"
}

/**
 * There is the example tests
 * For UI tests
 */
describe('Example UI tests', () => {
    it('Alone UI test', () => {
        var login_page = context.getLoginPage();
        var promise;
        step('Load main page', promise, () => {
            promise = login_page.loadPage(settings.login_page.url);
        });
        step('Set login n password fields', promise, (done) => {
            login_page.setLogin(test_user.login)
            var login_promise = login_page.getLoginValue();
            login_promise.then((login) => assert(login).to.equal(test_user.login));
            login_page.setPassword(test_user.password);
            var password_promise = login_page.getPasswordValue();
            password_promise.then((pwd) => assert(pwd).to.equal(test_user.password));
        });
        step('Send auth form', promise, (done) => {
            promise = login_page.sendForm();
        });
        var success_auth_page = context.getSuccessAuthPage();
        step('Check authorization', promise, (done) => {
            var success_auth_promise = success_auth_page.init();
            success_auth_promise.then(() => {
                var message_promise = success_auth_page.getMessage();
                message_promise.then((msg) => assert(msg).to.equal('Access granded!'));
            });
        });
        // Close web driver;
        context.getWebDriver().close();
    });
});