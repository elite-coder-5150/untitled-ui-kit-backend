import { express } from 'express'

const app = express();

import { http, server } from 'http'
import { io } from 'socket.io'
import { path } from 'path'

app.use(express.static(path.join(__dirname, + 'public/index.html')))

io.on('connection', socket => {
    console.log('a user connected')

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

    socket.on('message', message => {
        console.log('message: ' + message);
        // broad cast the message to every one
        io.emit('message', message);
    })
})

http.listen(3000, () => {
    console.log('listening on port 3000')
})
