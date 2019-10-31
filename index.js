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


// create a new one
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



// delete one thats already on file//
server.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;
    db.remove(id)
      .then(user => {
          if (user){
              res.status(200).json({success: true}).end()
          } else {
              res.status(404).json({success: false})
          }
      })
      .catch(err => {
          res.status(500).json({success: false, err})
      })
})



// edit one that we have on file
server.put('/api/users/:id', (req, res) => {
    const id = req.body.id
    const userInfo = req.body

    db.update(id, userInfo)
        .then(user => {
            if (user) {
                res.status(200).json({success: true, user});
            } else {
                res.status(404).json({success: false, message: `id  does not exist`})
            }
        })
        .catch(err => {
            res.status(500).json({success: false, err})
        })

    
})
























