
var PythonWeb = require("../index");

/// initialize the server
var server = new PythonWeb.Server({ 
	
	/// listen to port
	port: 8585,

	/// the python binary to use
	pythonBin: "python",

	/// the python env variables
	pythonEnv: {
		PYTHONPATH: "..."
	}

});

/// start the server
server.start();
