const app =  require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

io.on('connection', (socket) => {
    console.log('User connected');
    socket.emit('message', { manny: 'hey how are you?'});
    socket.on('another event', (data) => {
        console.log(data);
    });
});