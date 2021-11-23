/**
 * Context includes some needed client requirements
 *
 * For example - define the Environment Configurator only
 */

/**
 * Get the concrete client for env configurator
 */
var client = require.main.require('integrations/environment/file_env');

/**
 * Set the configurator
 */
var env = require('./adapters/core_env').setIntegration(client);

/**
 * Provide client to tests, core etc.
 */
module.exports.getIntegration = () => { return env.getIntegration(); }