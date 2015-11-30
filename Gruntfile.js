'use strict';

module.exports = function (grunt) {
	
	//loads all npm taska automagically
	require('jit-grunt')(grunt);

	/* Change these accordingly */
	var appConfig = {
		app: 'app',
		dist: 'dist',
		cssSRC: 'app/assets/styles',
		jsSRC: 'app/scripts/'
	};

	grunt.initConfig({
		 pkg: grunt.file.readJSON('package.json'),
		 conf: appConfig,

		 /* Concatenation task */
		 concat: {
	    js: {
	      src: ['<%= conf.jsSRC %>/**/*.js'],
	      dest: '<%= conf.dist %>/scripts/app.js',
	    },
	    css: {
	    	src: ['app/assets/styles/one.css', 'app/assets/styles/two.css'],
	    	dest: 'dist/styles/app.css'
	    }
	  },//end concat

	  watch: {
	  	js: {
	  		files: ['app/scripts/**/*.js'],
	  		tasks: ['concat:js']
	  	},
	  	css: {
	  		files: ['app/assets/styles/**/*.css'],
	  		tasks: ['concat:css']
	  	}
	  },//end watch

	  connect: {
	  	options: {
	  		port: 7335,
	  		hostname: 'localhost',
	  		livereload: 35729
	  	}, 
	  	livereload: {
	  		options: {
	  			open: true,
	  			middleware: function (connect) {
	  				return [
	  					connect.static('.tmp'),
	  					connect().use(
	  						'/bower_components',
	  						connect.static('./bower_components')
	  					),
	  					connect().use(
	  						'/app/assets/styles',
	  						connect.static('./app/assets/styles')
	  					),
	  					connect.static(appConfig.app)
	  				];
	  			}
	  		}
	  	}
	  },//end connect

	});

	/*  Specify the default task  */
	grunt.registerTask('default', ['watch']);



}

/** Reminders **

**** General ***********************************************************

in watch.tasks use task:subtask

**** Globbing patterns *************************************************

* matches any number of characters, but not /
? matches a single character, but not /
** matches any number of characters, including /, as long as it's the only thing in a path part
{} allows for a comma-separated list of "or" expressions
! at the beginning of a pattern will negate the match

************************************************************************
**/











