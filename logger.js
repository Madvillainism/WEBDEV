const eventEmitter = require ('events');
const { EventEmitter } = require('stream');
const uuid = require('uuid'); //crea un formato de id universal

class logger extends EventEmitter {
    log(msg){
        //call event
        this.emit('message', {id: uuid.v4(), msg}); //cada que se llama muestra un id y un msg
    }
}

module.exports = logger; 

