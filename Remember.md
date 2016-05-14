# Reminders

Things to remember, in the context of this grunt project.

## General

* in watch.tasks use task:subtask

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

