var http = require('http');
var fs = require('fs');
var mime = require('mime')
var staticServer= require("./internals/static-server.js");


//Importando configuraciones
var config = require('./config/config');
var IP = config.IP,
    PORT = config.PORT;
//Importando manejadores
var handlers = require("./internals/handlers");

var server = http.createServer(function(req, res){
    var url = req.url;
    console.log(`> Recurso solicitado> ${url}`);
    if(url == "/"){
        url = '/index.html'
    }
//Verificando si la URL esta asociada a una acción que puede hacer el server
//Si existe un función en handlers llamada como el contenido de la variable "URL"
if(typeof(handlers[url]) == "function"){
    handlers[url](req, res);
}else{
    //No se encontró un manejador para la URL solicitada por el usuario se intentará servir de manera estatica
    staticServer.serve(url,res);
}

    
    });

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});