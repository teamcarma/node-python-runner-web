"use strict";

var http    = require('http'),
    Python  = require("python-runner");


/**
 *
 * Python Command Server
 * 
 * @param {Object} options
 * 
 */
var Server = function(options){

    options             = options || {};
    options.port        = options.port || 8585;
    options.pythonBin   = options.pythonBin || "python";
    options.pythonEnv   = options.pythonEnv || {};

    /// Server logic
    var server = http.createServer(function (request, res) {
      
        /// only allow POST calls no matter the URL
        if(request.method === "POST") {
            
            var data = "";

            request.on("data", function(chunk) {
                data += chunk;
            });

            request.on("end", function() {

                var date = new Date();

                /// Log begining of execution
                console.log(options.pythonBin + " executing");

                Python.exec(
                    data, {
                        bin: options.pythonBin,
                        env: options.pythonEnv
                    })
                    .then(function(data){
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.write(data);
                        res.end();
                    })
                    .catch(function(err){
                        res.writeHead(500, {'Content-Type': 'text/plain'});
                        res.write(err);
                        res.end();

                        /// print the error details
                        console.log("Error");
                        console.log(data);
                        console.log("-----");
                        console.log(err);


                    })
                    .finally(function(){

                        /// Log execution
                        var timeSec = (new Date().getTime() - date.getTime()) / 1000;
                        console.log(options.pythonBin + " executed in " + timeSec + " seconds");

                    });

            });

            return;

        }

        /// error
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Please POST the python instructions");

    });

    /**
     *
     * Server facade
     * 
     * @type {Object}
     * 
     */
    var self = {

        /**
         *
         * Start the server
         * 
         * @return
         * 
         */
        start: function(){
            server.listen(options.port);
            console.log("server listening to '" + options.port + "' and set to run '" + options.pythonBin + "'");
        },

        /**
         *
         * Stop the server
         * 
         * @return
         * 
         */
        stop: function(){
            server.stop();
        }


    };

    return self;

};

module.exports = Server;
