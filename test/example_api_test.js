/**
 * Example test class for API tests
 */

/**
 * Get environment settings
 */
var settings = require.main.require('core/core').settings;
if (settings.service1 == undefined) {
    console.warn('FUCKUP!!!');
}

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
 * In API we can use sync step (see core.js)
 */
var step = require.main.require('core/core').step;

/**
 * Depend context
 */
var context = require('./context/api_context');

/**
 * There is the example tests
 * For API Request
 */
describe('Example API tests', () => {
    it('Alone API test', () => {
        var endpoint1 = context.getEndpoint1();
        var response1;
        var json_response_body1;
        step('Send request', () => {
            response1 = endpoint1.request(settings.service1.base_url);
        });
        step('Check response 200 Ok', () => {
            assert(response1.statusCode).to.equal(200);
        });
        step('Check field value', () => {
            json_response_body1 = JSON.parse(response1.body.toString('utf-8'));
            assert(json_response_body1.processId).to.not.undefined;
        });
        var endpoint2 = context.getEndpoint2();
        step('send next request and check 201 Created', () => {
            var response2 = endpoint2.request(settings.service1.base_url, json_response_body1.processId);
            assert(response2.statusCode).to.equal(201);
        });
    });
});
