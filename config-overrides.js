/* config-overrides.js */

module.exports = function override(config, env) {
	//do stuff with the webpack config...
	return config;
}

const { override, useBabelRc } = require("customize-cra");
module.exports = override(
	useBabelRc()
);