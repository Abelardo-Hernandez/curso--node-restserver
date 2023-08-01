const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Milddlewares funcion que siempre se ejecutara
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
        
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        // Lectura y Parseo del body
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public'));
    }
    
    //Metodo de rutas
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    //Metodo de puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log('SERVIDOR CORRIENDO EN PUERTO', this.port)
        });
    }

}


module.exports = Server;
