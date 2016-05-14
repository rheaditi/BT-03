# Reminders

Things to remember, in the context of this grunt project.

## General

* in watch.tasks use task:subtask

## Globbing patterns

* \* matches any number of characters, but __NOT__ /
* ? matches a single character, but __NOT__ /
* \*\* matches any number of characters, including /, as long as it's the only thing in a path part
* {} allows for a comma-separated list of "or" expressions
* ! at the beginning of a pattern will negate the match

Eg:

* `/{,* /}*.js` (remove space after * | goes only one level deep (improved performance))

