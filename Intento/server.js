require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const encrypt = require("mongoose-encryption");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://mibasededatos:Hyjlo07-kil39pqiy@clustermiapp.2zi77qv.mongodb.net/MiAppDB", {useNewUrlParser: true});

const Schema = mongoose.Schema;
const usuarioSchema = new Schema ({
    nombre: String,
    email: String,
    contraseña: String
});

usuarioSchema.plugin(encrypt, {secret: process.env.SECRETOS, encryptedFields: ["contraseña"] });


const Usuario = new mongoose.model("Usuario", usuarioSchema);


app.post("/registrar", function (req, res){
    const usuarioFormulario = req.body.nombre;
    const emailFormulario = req.body.email;
    const contraseñaFormulario = req.body.contraseña;

    const usuarioBaseDatos = new Usuario ({
        nombre: usuarioFormulario,
        email: emailFormulario,
        contraseña: contraseñaFormulario
    });

    usuarioBaseDatos.save();
});



if(process.env.NODE_ENV === 'production') {
app.use(express.static('frontend/build'));
app.get("*", (req, res) => {
    res.sendFile((__dirname + "/frontend/build/index.html"));
})
}

let port = process.env.PORT;
if (port == null || port == "") {
port = 5000;
}

app.listen(port, function(){
    console.log("servidor de express funcionado");
})