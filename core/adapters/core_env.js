/**
 * Adapter for environment configuration
 * This is an analog of Java Interface
 */
var parent = require('./_proto');

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
var client = {
    getEnvironmentSettings: () => {
        console.error("No implementation for Environment configurator!");
    }
};

/**
 * Set the real client methods
 * WARNING! Strongly recommended NOT RENAME this method!
 */
module.exports.setIntegration = (current_client) => {
    client = parent.setIntegration(client, current_client);
    return this;
}

/**
 * Get client to tests, core etc.
 * WARNING! Strongly recommended NOT RENAME this method!
 */
module.exports.getIntegration = () => { return client; }