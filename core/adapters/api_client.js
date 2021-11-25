/**
 * API client
 * In Interface paradigm
 *
 * There are:
 * - configuration for client
 * - request execution
 * - contract checking (in isRightSchema method)
 */
var parent = require('./_proto.js');

/**
 * Pseudointerface
 *
 * in client we declare all of functions what we need
 *
 * REQUIRED!!!
 * This is, in facts, the standard of your client type
 *
 * And it object you'll use in your TDO's
 */
var api_client = {
    configure: (base_url, schema) => {
        console.error("No implementation for API configure!");
    },
    execute: (json_body) => {
        console.error("No implementation for API request!");
    }
}

/**
 * Set the real client methods with magic
 */
module.exports.setIntegration = (current_client) => {
    api_client = parent.setIntegration(api_client, current_client);
    return this;
}

/**
 * Get client to tests, core etc.
 */
module.exports.getIntegration = () => { return api_client; }
