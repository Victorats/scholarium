'use strict';

const sqlite = require('node:sqlite');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));

class Model{
    constructor(){
        this.conn = new sqlite.DatabaseSync(config.db);
        this.reset();
    }

    //Emulacao de metodo abstrato
    reset() {
        throw new Error('A classe concreta deve implementar o metódo reset');
    }
    define(dados) {
        throw new Error('A classe concreta deve implementar o metódo define(dados)');
    }

    //Implementar metodos para listagens (com paginação) e CRUD

}