// Require.js Configurations
// -------------------------
require.config({

	// Sets the js folder as the base directory for all future relative paths
	baseUrl : "./js",

	// 3rd party script alias names (Easier to type "jquery" than "libs/jquery,
	// etc")
	// probably a good idea to keep version numbers in the file names for updates
	// checking
	paths : {
		// Core Libraries
		// --------------
		"jquery" : "../libs/jquery",

		"jquerymobile" : "../libs/jquery.mobile",

		"underscore" : "../libs/lodash",

		"backbone" : "../libs/backbone",

		// Plugins
		// -------
		"backbone.validateAll" : "../libs/plugins/Backbone.validateAll",

		"bootstrap" : "../libs/plugins/bootstrap",

		"text" : "../libs/plugins/text"
	},

	// Sets the configuration for your third party scripts that are not AMD
	// compatible
	shim : {
		// jQuery Mobile
		"jquerymobile" : [ "jquery" ],

		// Twitter Bootstrap jQuery plugins
		"bootstrap" : [ "jquery" ],

		// Backbone
		"backbone" : {

			// Depends on underscore/lodash and jQuery
			"deps" : [ "underscore", "jquery" ],

			// Exports the global window.Backbone object
			"exports" : "Backbone"
		},

		// Backbone.validateAll plugin that depends on Backbone
		"backbone.validateAll" : [ "backbone" ]
	}
});

// Launch first script
require([ "MobileInit" ], function() {
});