const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();


bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Heroes del Silencio'));
bands.addBand(new Band('Metallica'));

console.log(bands);






// Mensajes de Sockets
io.on('connection', client => {

    console.log('Cliente Conectado!!!')

    io.emit('active-bands', bands.getBansd());




    client.on('disconnect', () => {
        console.log('Cliente Desconectado!!!')
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);

        io.emit('mensaje', { admin: 'Nuevo mensaje' })


    });

    client.on('emitir-mensaje', (payload) => {
        console.log(payload);

        //io.emit('nuevo-mensaje', payload);

        client.broadcast.emit('nuevo-mensaje', payload);

    })

    client.on('vote-band', (payload)=> {
        console.log(payload);
      
        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBansd());

    });

    client.on('add-band', (payload)=>{
        bands.addBand(new Band(payload.name));
        io.emit('active-bands', bands.getBansd());

    });

    client.on('delete-band', (payload)=>{
        bands.deleteBand(payload.id)
        io.emit('active-bands', bands.getBansd());

    });



});