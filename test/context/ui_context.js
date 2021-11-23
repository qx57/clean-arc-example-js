/**
 * UI test context module
 */
var web_driver = require.main.require('integrations/ui_wrapper/selenium_driver');
var ui_wrapper = require.main.require('core/adapters/ui_wrapper').setIntegration(web_driver).getIntegration();

/**
 * Set TDO (aka Page objects)
 */
var login_page = require.main.require('tdo/ui/login_page').setWebDriver(ui_wrapper);
var success_auth_page = require.main.require('tdo/ui/success_auth_page').setWebDriver(ui_wrapper);

/**
 * Export TDOs to test
 */
module.exports.getLoginPage = () => { return login_page; }
module.exports.getSuccessAuthPage = () => { return success_auth_page; }

module.exports.getWebDriver = () => ui_wrapper;