/**
 * @module Build
 * @class Build.Config
 * @static
 */

module.exports = function(grunt) {

	var config = {};

	config.root = 'www';
	config.stylesheets = config.root + '/stylesheets';
	config.javascripts = config.root + '/javascripts';
	config.jsbin = config.javascripts + '/generated';
	config.cssbin = config.stylesheets + '/generated';
	config.images = config.root + '/images';
	config.docsbin = 'docs';

	// Project configuration.
	grunt.initConfig({

		'beautifier': {
			'options': {
				'indentSize': 1,
				'indentChar': '\t',
				'spaceAfterAnonFunction': true
			}
		},

		'beautify': {
			'files': [ config.javascripts + '/app/**/*.js' ]
		},

		'compass': require('./build/config/compass.js')(config),

		'cssmin': require('./build/config/cssmin.js')(config),

		'qunit': require('./build/config/qunit.js')(config),

		'yuidoc': require('./build/config/yuidoc.js')(config),

		'requirejs': require('./build/config/requirejs.js')(config),

		'jslint': require('./build/config/jslint.js')(config),

		'watch': require('./build/config/watch.js')(config),

		'pretty-sass': {
			'files': [ config.stylesheets + '/scss/**/*.scss' ]
		}

	});

	// Default task.
	grunt.registerTask('default', 'compass:app cssmin requirejs');
	grunt.registerTask('docs', 'yuidoc');
	grunt.registerTask('pretty-js', 'beautify');

	// load local tasks.
	grunt.loadTasks('./build/tasks');

	// load grunt plugins
	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-compass');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-crusher');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-jslint');

};
