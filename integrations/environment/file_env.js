var environments = require.main.require('environments.json');
var environment = environments[process.env.ENV];

module.exports.getEnvironmentSettings = () => { return environment; }