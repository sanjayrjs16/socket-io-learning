// var express = require('express');
// var socket = require('socket.io');

// // App setup
// var app = express();
// var server = app.listen(4000, function(){
//     console.log('listening for requests on port 4000,');
// });

// // Static files
// app.use(express.static('public'));

// // Socket setup & pass server
// var io = socket(server);
// io.on('connection', (socket) => {

//     console.log('made socket connection', socket.id);
//     socket.emit('chat-message', "Hello there mate!")
// });
const io = require('socket.io')(3000, {
    cors: {
      origin: "*",
    },
  });
io.on('connection', (socket) => {
    socket.emit('chat-message', "hello there");
    console.log("a socket connection was made with id ", socket.id)
})