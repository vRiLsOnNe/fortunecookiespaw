var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var connectionUrl = 'mongodb://aledan:metallica1994@ds115918.mlab.com:15918/fortuneitgam'

mongoClient.connect(connectionUrl, function(err, db){
    if (err){
        console.log("> No se pudo conectar con la base de datos");
        throw err;
    }
    var papers = db.collection('paper');
    var mensaje = "";
    for(var i =2; i<process.argv.length; i++){
        mensaje += (process.argv[i]+"");
    }
    console.log(`> Mensaje rescatado: ${mensaje}`);
    papers.insert({
        "paper" : mensaje
    },function(err, res){
        if (err){
            console.log(">No se pudo insertar el documento");
            db.close();
            throw err;
        }
        console.log(`> Resultado de la inserción: ${JSON.stringify(res)}`);
        db.close();
    });
});