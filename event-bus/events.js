const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios
    .post('http://posts-clusterip-srv:4000/events', event)
    .catch((err) => console.log(err.message));
  axios
    .post('http://comments-srv:4001/events', event)
    .catch((err) => console.log(err.message));
  axios
    .post('http://query-srv:4002/events', event)
    .catch((err) => console.log('Event bus error: ', err.message));
  axios
    .post('http://moderation-srv:4003/events', event)
    .catch((err) => console.log(err.message));
  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(7000, (req, res) => {
  console.log('listening on port 7000');
});
