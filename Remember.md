# Reminders

Things to remember, in the context of this grunt project.

## General

* in watch.tasks use task:subtask

## Globbing patterns

* \* matches any number of characters, but *not* /
* ? matches a single character, but not /
* \*\* matches any number of characters, including /, as long as it's the only thing in a path part
* {} allows for a comma-separated list of "or" expressions
* ! at the beginning of a pattern will negate the match


/{,* /}*.js --< remove space after * | goes only one level deep (improves performance) 
************************************************************************
**/