'use strict';

module.exports = function (grunt) {
	
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
	  },

	  watch: {
	  	js: {
	  		files: ['app/scripts/**/*.js'],
	  		tasks: ['concat:js']
	  	},
	  	css: {
	  		files: ['app/assets/styles/**/*.css'],
	  		tasks: ['concat:css']
	  	}
	  },

	});

	/*  Specify the default task  */
	grunt.registerTask('default', ['watch']);


	/* Contrib Taska loaded */
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

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











