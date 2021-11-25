/**
 * This is Test Definition Object for API endpoint
 *
 * It used for define all of impact points
 * of real test object
 */
var schema = require.main.require('resources/schemas/endpoint_1_swagger_schema.json');
var client;
var response;

/**
 * method for context settings
 */
module.exports.setClient = (current_client) => {
    client = current_client;
    return this;
}

/**
 * Send request
 */
module.exports.request = (base_url) => {
    client.configure(base_url, schema);
    response = client.execute();
    return response;
}