'use strict';

module.exports = function (grunt) {
	
	//loads all npm tasks automagically
	require('jit-grunt')(grunt);

	/* Change these accordingly */
	var appConfig = require('./gruntConfig.js');
	var pkg

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		conf: appConfig,
		appName: 'WUT',
		generate: {
			name: '<% = pkg.name %>'
		}
	});

	console.log(grunt.config.get(['appName']));

	/* Generate - Custom Task */
	grunt.registerTask('generate', 'Generates different files etc., from templates.', function(type,subtype,module_name){
		var exampleString = '\nExample: grunt generate:angular:controller:<controller_name>\n\n';
		var options = this.options(); //provide defaults if required within the {}
		

		var file = grunt.file.readJSON('package.json');
		console.log(file.name);

		if(arguments.length === 0){
			grunt.fail.fatal('You must specify the type of generator.'+exampleString);
		}
		if(arguments.length === 1){
			grunt.fail.fatal('Missing generator subtype.'+exampleString);
		}

		if(type === 'angular'){
			
			if(arguments.length < 3){
				grunt.fail.fatal('Missing module name.'+exampleString);
			}

			grunt.log.write('Generating an Angular ');

			switch(subtype) {
				case 'controller': {
					grunt.log.writeln('Controller "'+module_name+'".');
				}
				break;
				case 'view': {
					grunt.log.writeln('View "'+module_name+'".');
				}
				break;
			}
		}
	});

	/*  Specify the default task  */
	grunt.registerTask('default', ['generate']);
}











