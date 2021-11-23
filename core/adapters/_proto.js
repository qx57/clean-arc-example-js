/**
 * It's a kind of magic
 *
 * Override the pseudointerface methods to real
 */
module.exports.setIntegration = (integration, current_integration) => {
    for (var m in integration) {
        if (m in current_integration) {
            integration[m] = current_integration[m];
        }
    }
    return integration;
};