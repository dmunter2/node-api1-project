const express = require('express')
const port = 4000;
const server = express();

server.get('/api/users', (req, res) => {
    res.send('hello send back string')
})


server.listen(port, () => {
    console.log(`server listening on ${port}`)
})






























// // const http = require('http');
// // const hostname = '127.0.0.1';
// // const port = 3000;

// const express = require('express');
// const db = require('./data/db')
// const server = express();
// const port = 4000;

// server.listen(4000, () => {
//     console.log('=== server listening')
// });



// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200; 
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello World from Node\n');
// // });

// server.listen(port, hostname, () => {
//     console.log(`server is running at http://${hostname}:${port}/`)
// });



// // first action is to read 

// server.get('/api/users', (req, res) => {
//     db.find()
//         .then((users) => {
//             res.status(200).json(users);
//         })
//         .catch((err) => {
//             res.status(500).json({
//                 message: err,
//                 success: false
//             });
//         });
// })


// // post request from client 

// server.post('/api/users', (req, res) => {
//     const user = req.body 
//     console.log(userInfo)
//     db.insert(userInfo)
//         .then(user => {
//             if( !user.name || !user.bio) {
//                 res.status(400).json({errorMessage: 'Please provide bio and user' })
//             } else {
//                 res.status(201).json(user)
//             }
//         })
//         .catch(err => {
//             res.status(500).json({error: 'There was an error'})
//         })




// })

