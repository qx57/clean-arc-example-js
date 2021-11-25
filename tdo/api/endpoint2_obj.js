/**
 * Test Object Definition class (like Endpoint1Obj.kt)
 *
 * There are different description of methods with Endpoint1Obj
 */
var schema = require.main.require('resources/schemas/endpoint_2_swagger_schema.json');
var client;

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
module.exports.request = (base_url, processId) => {
    client.configure(base_url, schema);
    var body = {
        processId: processId
    }
    return client.execute(body);
}