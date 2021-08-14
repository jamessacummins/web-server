const express = require('express');
const path = require('path');
const members = require('./Members.js');

const app = express();

const logger = (req, res, next) => {
  console.log("Hello");
  next();
}

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));