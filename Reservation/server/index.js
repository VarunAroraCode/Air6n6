const express = require('express');
const moment = require('moment');
const path = require('path');
const query = require('../database/query.js');

const app = express();
const port = 3010;

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/now', (req, res) => {
  const month = moment(req.query.date).month() + 1;
  query.getTwoMonth(1, month, res.send.bind(res));
});

app.listen(port, () =>
  console.log(`Reservation Component listening on port ${port}!`)
);