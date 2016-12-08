var fortune = require("./fortune")
//Creando el handler
//getfortune
var _getauthor = function(re, res){
    console.log("> Se solicito el autor...");
    res.end("Mario Hernandez.");
};

var _crackTheCookie = function(req, res){
    console.log("> Cookie crash requested...");

    fortune.getFortune(function(fortunePaperObj){
        //Preparando objetos para contestar con Json
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        //Respondiendo con el objeto
        res.end(fortunePaperObj);
    });
};

//Creando objeto manejador
var handlers = {};


//Registrando manejadores en el objeto manejador

handlers["/getacookie"] = _crackTheCookie;
handlers["/getauthor"] = _getauthor;
//Exportando objeto manejador
module.exports = handlers;
