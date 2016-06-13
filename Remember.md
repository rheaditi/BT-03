# Reminders

Things to remember, in the context of this grunt project.

## Grunt Specific

#### initConfig

Make sure all the async data you need (e.g. config files being read) is got outside (before) first and then passed to the initConfig. Otherwise they might be 'undefined' and unavailable while the tasks are running because they didn't exist when initConfig ran.

```js
var appConfig = require('./gruntConfig.js'); //read entire file
var pkgjson = grunt.file.readJSON('package.json'); //read file as JSON

// THEN use the above variables to pass to initConfig
grunt.initConfig({
	pkg: pkgjson,
	conf: appConfig,
	appName: pkgjson.name
});
```

## Assumed Directory Structure

```
/
| -- app/
     | -- 
| -- dist
| -- node_modules
| -- bower_components
| -- bower.json
| -- package.json
| -- Gruntfile.js
```

## Globbing patterns

* \* matches any number of characters, but __NOT__ /
* ? matches a single character, but __NOT__ /
* \*\* matches any number of characters, including /, as long as it's the only thing in a path part
* {} allows for a comma-separated list of "or" expressions
* ! at the beginning of a pattern will negate the match

Eg:

* `/{,* /}*.js` (remove space after * | goes only one level deep (improved performance))

## Plugin Specifics

### jit-grunt

Used to replace a bunch of `grunt.loadNpmTasks` lines with a single `require('jit-grunt')(grunt);`  
Loads tasks in following order:
  1. node_modules/grunt-contrib-`task-name`
  2. node_modules/grunt-`task-name`
  3. node_modules/`task-name`

