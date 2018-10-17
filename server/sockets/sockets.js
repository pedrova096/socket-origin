const { io } = require('../server');

//on => Escuchar
//emit => Emitir 
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', { usuario: 'Administrador', mensaje: 'Bienvenido Mundo!' })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //Escuchar Mensajes
    client.on('enviarMensaje', (data, callback) => {
        console.log({ data });
        // client.emit('enviarMensaje', data);//Responde a quien envio
        client.broadcast.emit('enviarMensaje', data);
        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }
    })
});