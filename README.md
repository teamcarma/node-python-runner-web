
# Node Python Runner Web

*Supported by*:

[![Carma](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/banner.png)](https://carmacarpool.com/)

[![Carma IOS](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/ios.png)](https://carmacarpool.com/ios)

[![Carma Android](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/android.png)](https://carmacarpool.com/android)



A web server that executes python code by request. Just POST your python code against the Server 
and get the stdout of its execution.

Also, you can use this as a library to initialize the server when you feel to.

Useful to bridge different languages. 

*Be careful not to use this on production because all the python code 
will be executed.*



## Library Usage

```shell

npm install python-runner-web

```


```js


var PythonWeb = require("python-runner-web");

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


```

## Binary Usage

```shell

npm install python-runner-web -g

```

```shell

> python-runner-web -h

Usage: server.js [options]

	--help, -h
		Displays help information about this script
		'server.js -h' or 'server.js --help'

	--port, -p
		Sets the server port

	--python
		Python binary name/path


```

```shell

> python-runner-web -p 8080
server listening to '8080' and set to run 'python'


```

Test the server: 

```shell

> curl -i -X POST -d $'print("Carma Carpooling")\nprint("Get there together")' http://localhost:8080
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Fri, 31 Oct 2014 09:01:08 GMT
Connection: keep-alive
Transfer-Encoding: chunked

Carma Carpooling
Get there together


```

## Authors

* [Oscar Brito](https://twitter.com/aetheon)
* [Carma](https://twitter.com/TeamCarma)
