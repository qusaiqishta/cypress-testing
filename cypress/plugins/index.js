/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {

  const configOverride = {};
  if (config.userAgent === 'desktop') {
    configOverride.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9';
    configOverride.viewportWidth = 1920;
    configOverride.viewportHeight = 800;

  }
  else if (config.userAgent === 'mobile') {
    // Mobile view configurations
    configOverride.userAgent ='Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A356 Safari/604.1';
    configOverride.viewportWidth = 414;
    configOverride.viewportHeight = 736;

  }
	return { ...config, ...configOverride };
}
