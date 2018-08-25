// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file

mongoose.connect('mongodb://mongo/test', { useNewUrlParser: true });
connected = false;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    connected = true;
});
var mqttSchema = new mongoose.Schema({
    name: String,
    value: String,
    timestamp: Date,
  });
  
var MqttTopic = mongoose.model('MqttTopic', mqttSchema);


// // Connect to mongodb
// mongoose.connect(dbHost);

// // create mongoose schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// // create mongoose model
// const User = mongoose.model('User', userSchema);

// /* GET api listing. */
router.get('/api', (req, res) => {
    res.send({'message':'api works'});
});

// /* GET all users. */
router.get('/api/topics', (req, res) => {
    MqttTopic.find({}, (err, topics) =>{
        res.status(200).json(topics);
    })
});

// /* GET one users. */
// router.get('/users/:id', (req, res) => {
//     User.findById(req.param.id, (err, users) => {
//         if (err) res.status(500).send(error)

//         res.status(200).json(users);
//     });
// });

// /* Create a user. */
router.post('/topics', (req, res) => {
    let topic = new MqttTopic({
        name: req.body.name,
        value: req.body.value,
        timestamp: new Date(),
    });

    topic.save(error => {
         if (error) res.status(500).send(error);

        res.status(201).json({
            message: "Topic updated"
        });
    });
});

module.exports = {'router':router, 'mqttTopic':MqttTopic};
