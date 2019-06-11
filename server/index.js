const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

const PORT = process.env.PORT || 8888;

const { getParks, getOnePark } = require('../database/index.js');



app.get('/parks', (req, res) => {
  getParks((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.get('/parks/:id', (req, res) => {
  const { id } = req.params;
  getOnePark(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});