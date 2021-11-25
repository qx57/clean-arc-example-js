/**
 * UI Web driver wrapper interface
 *
 * There are some methods (in driver definition) for all of cases in test or test steps
 * There is no final list of methods, in your project you can change it for your requirements
 */
var parent = require('./_proto.js');

/**
 * Web Driver pseudointerface
 *
 * REQUIRED!!!
 *
 * It object you'll use in your TDO's!
 */
var ui_wrapper = {
    loadPage: (url) => { console.log('Load page method not initialized!') },
    getElementByCss: (css) => { console.log('Get element by CSS method not initialized!') },
    getElementByXpath: (xpath) => { console.log('Get element by XPATH method not initialized!') },
    setFieldValue: (field, value) => { console.log('Set field value method not initialized!') },
    getFieldValue: () => { console.log('Get field value method not initialized!') },
    clickElement: (el) => { console.log('Click element method not initialized!') },
    awaitVisible: (duration, css) => { console.log('Await visibility method not initialized!') },
    getInnerText: (el) => { console.log('Get inner text method not initialized!') },
    close: () => { console.log('Close session method not initialized!') },
    quit: () => { console.log('Quit session method not initialized!') }
}

/**
 * Set the real web driver methods
 */
module.exports.setIntegration = (current_wrapper) => {
    ui_wrapper = parent.setIntegration(ui_wrapper, current_wrapper);
    return this;
}

/**
 * Get web driver to tests, core etc.
 */
module.exports.getIntegration = () => { return ui_wrapper; }
