const http = require('../../app')
const io = require('socket.io')(http);
const express = require('express');
const routes = express();

let users = [];

/**
 * Router for Messages
 */
routes.get('/.*/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
    /**
     * Handle socket connections
     */
    io.sockets.on('connect', (socket) => {
        // User entered event
        socket.on('USER_ENTERED', (username) => {
            users.push(username);
            io.emit('UPDATE_USERS', users);
        })
        // Message Send
        socket.on('SEND_MESSAGE', (message) => {
            io.emit('BROADCAST_MESSAGE', message);
        })
        // User Disconnected
        socket.on('disconnect', () => {
            console.log('Disconnected!');
        });
    });
})

module.exports = routes;