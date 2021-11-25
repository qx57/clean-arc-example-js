/**
 * Core class for JS tests
 *
 * Include some requirements and common code here
 */

/**
 * Use needed base test framework
 */
module.exports.describe = require('mocha').describe;
module.exports.it = require('mocha').it;

/**
 * Include chai matcher
 * and export for usage in tests like assert (for quik change in future)
 *
 * IMPORTANT! It is not in clean architecture rules, but we may use base test framework + matcher core modules =)
 */
var assert = require('chai').expect;
module.exports.assert = assert;

/**
 * Get environment parameters
 * We can use adapters instead Java Interfaces + Context + Clients
 * Export in tests
 */
var env = require('./context').getIntegration();
module.exports.settings = env.getEnvironmentSettings();

/**
 * Common methods (sync + async steps)
 */
module.exports.step = (message, callback) => {
    console.log("\n[STEP] " + message);
    callback();
}

module.exports.asyncStep = (message, promise, callback) => {
    console.log("\n[STEP] " + message);
    if (promise != undefined) {
        promise.then(() => {
            callback();
            done();
        }).catch((error) => {
            console.error('Promise error: ', error);
        });
    } else {
        callback();
    }
}
