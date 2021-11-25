/**
 * Concrete client realization
 *
 * For example,here code based on npm sync-request package
 */
var request = require('sync-request');

var getOptions = {
    'Accept': 'application/json'
};

var postOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

/**
 * Define URL, path and method
 */
var url = '';
var path = '';
var method = '';

/**
 * Hack for adapter's realization
 */
module.exports.setClient = (current_client) => {
    client = current_client;
    return this;
}

/**
 * Set API configuration
 */
module.exports.configure = (base_url, schema) => {
    url = base_url;
    path = Object.keys(schema.paths)[0];
    method = Object.keys(Object.values(schema.paths)[0])[0].toUpperCase(); // Feature for JSON swagger schema draft-04
}

/**
 * Send request and get response from API
 */
module.exports.execute = (json_body) => {
    var options = method == "GET" ? getOptions : postOptions;
    if (method != "GET" && json_body != undefined) { options.json = json_body; }
    var response = request(method, url + path, options);
    // Request and response logging
    console.log("\nREQUEST:\nUrl: " + response.url + "\nHeaders: "
        + JSON.stringify(response.headers, null, 2));
    if (json_body != undefined) { console.log("Body: " + JSON.stringify(json_body, null, 2)); }
    console.log("\nRESPONSE:\nStatus Code: " + response.statusCode + "\n"
        + response.body.toString('utf-8'));
    return response;
}