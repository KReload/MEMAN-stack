
const express = require('express');
const app = express();
const cors = require('cors');
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://mosquitto');

app.use(cors());

const bodyParser = require('body-parser');
const api = require('./api');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', api.router);

client.on('connect', () => {
  // Inform controllers that garage is connected
  
  client.subscribe('#')
})

client.on('message', (topic, message) => {
  let newTopic = new api.mqttTopic({
    name: topic,
    value: message.toString(),
    timestamp: new Date(),
  });

  newTopic.save(error => {
    if (error) console.log(error);

    console.log("added");
  });
 
});

client.on('offline', () => {
  client.end();
});

const port = process.env.PORT || "3000";

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
