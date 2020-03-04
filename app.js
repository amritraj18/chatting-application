const express = require('express');
const app = express();
const http = require('http').createServer(app);
var bodyParser = require('body-parser')
const cors = require('cors');

/**
 * Controllers for messages
 */
const messageController = require('./server/controllers/MessageController');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(messageController);
app.use(express.static(__dirname + '/server/public/'));

const PORT = process.env.PORT || 3000;
http.listen(PORT, function (PORT) {
    console.log(`listening on *:${3000}`);
});

module.exports = http