'use strict';

module.exports = function (grunt) {
	
	//loads all npm tasks automagically
	require('jit-grunt')(grunt);

	var utils = require('./customUtils.js');
	
	/* Change these accordingly */
	var appConfig = require('./gruntConfig.js');
	var pkgjson = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: pkgjson,
		conf: appConfig,
		appName: pkgjson.name
	});

	/* Generate - Custom Task */
	grunt.registerTask('generate', 'Generates different files etc., from templates.', function(type,subtype,entityName){
		
		var exampleString = '\nExample: grunt generate:angular:controller:<controller_name>\n\n';
		
		
		// Task Specific Configuration
		var options, pkg, conf;
		var outputFileContent, templateFile, location, filename;
		try{
			pkg = grunt.config.get(['pkg']);
			if(pkg.name == null)
				throw err;
		}
		catch(err){
			grunt.fail.fatal('The \'name\' field is missing from your \'package.json\'!');
		}

		try{
			conf = grunt.config.get(['conf']);
			if(conf.path.templates == null)
				throw err;
		}
		catch(err){
			grunt.fail.fatal('There is something wrong with your \'gruntConfig.js\' file. Missing path for templates.');
		}


		if(arguments.length === 0){
			grunt.fail.fatal('You must specify the type of generator.'+exampleString);
		}
		if(arguments.length === 1){
			grunt.fail.fatal('Missing generator subtype.'+exampleString);
		}

		if(type === 'angular'){
			
			if(arguments.length < 3){
				grunt.fail.fatal('Missing entity name.'+exampleString);
			}

			options = this.options({
				data: {
					appName: pkg.name,
					entityName: entityName
				}
			}); //provide defaults if required within the {}

			grunt.log.write('Generating an Angular ');

			switch(subtype) {
				case 'controller': {
					grunt.log.writeln('Controller \''+entityName+'\'.');

					templateFile = grunt.file.read(conf.path.templates+'/'+conf.filenames.angular.controller);
					options.data.entityName = utils.capCamelize(options.data.entityName);
					outputFileContent = grunt.template.process(templateFile,{  data: options.data });


				}
				break;
				case 'view': {
					grunt.log.writeln('View \''+entityName+'\'.');
				}
				break;
			}

			if( templateFile == null ){
				grunt.fail.fatal('Unable to fetch required template.');
			}
			
			

			
			console.log(outputFileContent);
		}
	});

	/*  Specify the default task  */
	grunt.registerTask('default', ['generate']);
}











