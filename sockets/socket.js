

const {io} = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    client.on('event', data => { 
        console.log('Cliente Conectado!!!') });


    client.on('disconnect', () => { 
        console.log('Cliente Desconectado!!!') });

        client.on('mensaje', (payload)=>{
            console.log('Mensaje!!!', payload);

            io.emit('mensaje', {admin: 'Nuevo mensaje'})


        })

  });