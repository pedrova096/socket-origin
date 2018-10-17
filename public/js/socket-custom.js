var socket = io();
//on => Escuchar
//emit => Emitir 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});
socket.on('enviarMensaje', function(data) {
    console.log({ data });
});
socket.emit('enviarMensaje', {
    usuario: 'Pedro',
    mensaje: 'Hola Mundo!'
}, function(resp) {
    console.log(resp);
});