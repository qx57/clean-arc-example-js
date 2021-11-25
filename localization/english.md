# Example of clean architecture project on JS



## Base
Requirements:
- Node.js 12.6 or higher
- Selenium Web Driver. For work you must download **_chromedriver.exe_**
  (Download [here](https://chromedriver.chromium.org/downloads)). Put it to repository root directory.
- You need set Environment variables:
```
PATH=C:\chromedriver.exe;ENV=dev
``` 


## Test Definition Objects (TDO)

* **Folder:** tdo/

The folder contains examples of TDO for API and UI tests (in the corresponding packages).
Important: clients (integrations) are added to the module using a specialized method (such as **setClient**):

```js
module.exports.setClient = (current_client) => {
  client = current_client;
  return this;
}
```
the client is formed in the adapter object (see Adapters)

The **_resources/themes_** folder contains Swagger files used for 
initializing the client for API tests (and for verifying contracts).



## Test cases

### Test case code

* **Folder:** test/

An example of the implementation of API and UI tests. In this example, 
**_sync-request_** is used as the client API, and UI tests are based on Selenium WebDriver.

TDO is connected to the tests as a module (from the context):
```js
var endpoint1 = context.getEndpoint1();
```
In the UI class, a web driver can additionally be called directly from the context (for session management):
```js
context.getWebDriver().close();
```
The specific packages used in integrations are specified directly in the context.

### Context

* **Folder:** test/context/

The context class forms a set of modules required to run a test/group of tests. the client/web driver 
implementation selected for the test is added to the context, which is then passed to the adapter 
for magical processing:
```js
var client = require.main.require('integrations/api_client/sync_request_client');
var api_client = require.main.require('core/adapters/api_client').setIntegration(client).getIntegration();
```
Also, TDO is connected in the context, into which the adapter object is then thrown - this way a 
specific client is connected to the TDO and the results of its work (Response, WebElement) are used
in the test.

### Settings

* **File:** environment.json

It contains all the settings and data necessary for conducting tests. The file is read using the 
module **_environment_** (integration/environment), after which the environment variables are 
available in the test in the parameter **_settings_** (see **Custom Framework**).


## Custom Framework

* **Folder:** core/

Framework contains of 3 main parts::
* Framework Core (a module with context connection and common functions)
* Adapter's library (for use in TDO's and clients)
* Common test context

### Framework Core

* **File:** core/core.js

A module that connects a common context, a basic test framework, matchers, and implements 
basic functionality, for example, reading environment variables from a test settings file.

### Adapters

* **Folder:** core/adapters/

The folder contains adapters (analogs of interfaces in OOP) for integrations, which will be 
used in TDO in the future. 

ATTENTION! MAGIC! (see core/adapters/_proto.js )

### Common test context

* **Folder:** core/

Connects the dependencies necessary for all tests (for example, the test environment configurator).
The connection takes place in the basic module **Framework Core**:
```js
var env = require('./context').getIntegration();
module.exports.settings = env.getEnvironmentSettings();
```


## Integrations

* **Folder:** integrations/

The example shows the implementation of clients and drivers for tests.

**IMPORTANT!** **_All_** of clients must have a set of methods described in the corresponding adapter
**_core/adapters_**!

## Maintainers
- [Denis Kudriashov](https://github.com/qx57)