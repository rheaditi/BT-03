'use strict';
var fs = require('fs');
var path = require('path');
var _  = require('lodash');

var fileExists = function(location, filename){
	var fullPath = path.join(location,filename);
	try{
		fs.accessSync(fullPath, fs.F_OK);
	}
	catch(err){
		return false;
	}
	return true;
};

var fileReadable = function(location, filename){
	var fullPath = path.join(location,filename);
	try{
		fs.accessSync(fullPath, fs.F_OK | fs.R_OK);
	}
	catch(err){
		return false;
	}
	return true;
};

var fileWritable = function(location, filename){
	var fullPath = path.join(location,filename);
	try{
		fs.accessSync(fullPath, fs.F_OK | fs.W_OK);
	}
	catch(err){
		return false;
	}
	return true;
};

var writeFileForced = function(location, filename, content){

	var fullPath = path.join(location, filename);
	if(fileWritable(location, filename) != true){
		//FILE TRUNCATED IF IT EXISTS & CREATED IF IT DOES NOT EXIST
		try{
			var fd = fs.openSync(fullPath, 'w');
		}
		catch(err){
			return false;
		}
	}
	fs.writeFileSync(fullPath, content);
	return true;
};

var readFile = function(location, filename){
	var fullPath = path.join(location, filename);
	if(fileExists(location,filename) != true){
		throw new Error('File does not exist!');
	}
	if(fileReadable(location,filename) != true ){
		throw new Error('File unreadable.');
	}
	var contents = fs.readFileSync(fullPath, 'utf-8');
	return contents;
};

var capCamelize = function(s){
	s = _.camelCase(s);
	s = _.upperFirst(s);
	return s;
}

var makeFileName = function(s, type){

}

module.exports = {
	fileExists: fileExists,
	fileReadable: fileReadable,
	fileWritable: fileWritable,
	readFile: readFile,
	writeFile: writeFileForced,
	capCamelize: capCamelize
};

