const express = require('express')

const server = express();
const db = require('./data/db');

server.use(express.json());


server.listen(4000, (req, res) => {
    console.log('server is listening');
})


// test
// server.get('/users', (req, res) => {
//     res.send('we are here')
// })



// time to read
server.get('/api/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({
                message: err,
                success: false
            });
        })
})



server.post('/api/users', (req, res) => {
    const userInfo = req.body;
    db.insert(userInfo);

    if (!userInfo.name || !userInfo.bio) {
        res.status(404).json({
            success: false,
            message: 'there was an error'
        })
    } else {
        res.status(201).json({success: 'it worked'})
    }
})


server.put('/api/users/:id', (req, res) => {
    const userInfo = req.body
    const id = req.body.id

    db.update(userInfo, id)
        .then(user => {
            if (user) {
                res.status(200).json({success: true, user});
            } else {
                res.status(404).json({success: false, message: `id ${id} does not exist`})
            }
        })
        .catch(err => {
            res.status(500).json({success: false, err})
        })

    
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

