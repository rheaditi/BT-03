// NO TRAILING SLASHES IN ANY LEAF DIR NAME
var folder = {};
var server = {};
var filenames = {};

folder.app = 'app';
folder.build = 'dist';
folder.static = folder.app + '/public';

// GRUNT TEMPLATES
folder.templates = 'generator-templates';

// NODE FILES
server.filename = 'server.js';
server.path = folder.app + '/' + server.filename;

// ASSETS -- CSS
folder.CSS = {};
folder.CSS.root = folder.static + '/css';
folder.CSS.theme = folder.static + '/css/theme';

// ASSETS -- JS
folder.JS = {};
folder.JS.root = folder.static + '/js';
folder.JS.lib = folder.static + '/js/lib';

// ASSETS -- IMAGES
folder.IMG = {};
folder.IMG.root = folder.static + '/img';

// Angular template filenames
filenames.angular = {};
filenames.angular.controller = 'angular-controller.js';

// Uncomment and run node to test these:
// console.log(folder);
// console.log(server);

module.exports = {
	path: folder,
	server: server,
	filenames: filenames
};