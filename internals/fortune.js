var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

/*module.exports= {
    "getfortune": function (cb) {
        mongoClient.connect("mongodb://aledan:metallica1994@ds115918.mlab.com:15918/fortuneitgam",
        function(err, db){
            var fortunass = db.collection("fortunas");
            var consulta = fortunass.find({});
            consulta.toArray(function(err, data){
                var selector = Math.round(Math.random(0)* data.length);
                console.log("El numero de tu fortuna es: "+ selector);
                var fortunefortunasObj = JSON.stringify(data[selector]);
                db.close();
                cb(fortunefortunasObj);
            });
        });
    }
};*/

module.exports = {
    "getFortune" : function(cb){
        //mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapp",
        mongoClient.connect("mongodb://fortunabd:VRILSONNE1987..@ds127428.mlab.com:27428/bdfortuna",
        function(err, db){
            if(err){
                console.log("> ERROR al conectarse a" +
                " la base de datos:"+
                " mongodb://127.0.0.1:27017/fortuneapp");
                //Armando el documento 

                var fortunefortunas = {
                    "mensaje":
                    "en todo  tiempo ama el amigo"
                };
                var respuesta = JSON.stringify(fortunefortunas);
                cb(respuesta);
            }else{
                var fortunassCollection = 
                db.collection("fortunas");
                var objetoRestultado = 
                fortunassCollection.find({});

                objetoRestultado.toArray(function(err, fortunas){
                    // Arreglo
                    var randomIndex = 
                    Math.round(Math.random(0)* 6);
                    var fortunefortunasObj = 
                    JSON.stringify(fortunas[randomIndex]);
                    db.close()
                    console.log("> La fortuna es: " + fortunefortunasObj);
                    cb(fortunefortunasObj);
                });
            }
        });
    }
};

