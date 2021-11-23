/**
 * Get API client realization
 */
var client = require.main.require('integrations/api_client/sync_request_client');
var api_client = require.main.require('core/adapters/api_client').setIntegration(client).getIntegration();

/**
 * Set endpoints TDO
 */
var endpoint1 = require.main.require('tdo/api/endpoint1_obj').setClient(api_client);
var endpoint2 = require.main.require('tdo/api/endpoint2_obj').setClient(api_client);

/**
 * Export TDOs to test
 */
module.exports.getEndpoint1 = () => { return endpoint1; }
module.exports.getEndpoint2 = () => { return endpoint2; }