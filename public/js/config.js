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
		"jquery" : "../libs/jquery-2.0.0",

		"jquerymobile" : "../libs/jquery.mobile-1.3.1",

		"underscore" : "../libs/lodash",

		"backbone" : "../libs/backbone-1.0.0",

		// Plugins
		// -------
		"backbone.validateAll" : "../libs/plugins/Backbone.validateAll",

		"text" : "../libs/plugins/text"
	},

	// Sets the configuration for your third party scripts that are not AMD
	// compatible
	shim : {
		// jQuery Mobile
		"jquerymobile" : [ "jquery" ],

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