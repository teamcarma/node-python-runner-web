#!/usr/bin/env node

var argv 		= require('argv'),
	PythonWeb 	= require("../index");


/// Process the arguments
var args = argv.option([
    
    {
        name: 'port',
        short: 'p',
        type: 'number',
        description: 'Sets the server port',
    },
    {
        name: 'python',
        type: 'string',
        description: 'Python binary name/path',
    }

]).run();


/// Initialize and start the server
var server = new PythonWeb.Server({
	port: 		args.options.port,
	pythonBin: 	args.options.python
});

server.start();



