
require('./db/mongoose'); // connect to database.
const Logs = require('./models/logs')

const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*",  methods: ["*"] }));
app.use(express.json());

const logsRouter = require('./routers/logs');
app.use(logsRouter);      // define router.

const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["*"]
  }
});

io.on('connection', (socket) => {
    socket.on('event', response => {
        const log = new Logs(response);
        log.save().then((log) => {
            io.emit('event', { success: true, ...response });
        }).catch((error) => {
            io.emit('event', { success: false, ...response });
        })
    });
});

http.listen(port, host, () => {
  console.log(`Socket.IO server running at http://${host}:${port}/`);
});