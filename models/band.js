const { v4: uuidV4 } = require('uuid');

class Band {
    constructor(name = 'sin Autor') {
        this.id = uuidV4();  //Identificador unico
        this.name = name;
        this.votes = 0;

    }
}

module.exports = Band;