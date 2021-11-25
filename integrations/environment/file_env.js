/**
 * Environment Configurator
 *
 * read the env properties from file
 */
var environments = require.main.require('environments.json');
var environment = environments[process.env.ENV];

/**
 * Export environment params
 */
module.exports.getEnvironmentSettings = () => { return environment; }