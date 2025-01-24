'use strict';
const sqlite = require('node:sqlite');

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));

class Status {

    reset() {
        this.id = undefined;
        this.descricao = undefined;
    }
    define(dados) {
        this.id = dados.id;
        this.descricao = dados.descricao;
    }
}

let status = new Status();
console.log(config.db);