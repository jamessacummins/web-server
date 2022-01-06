const express = require('express');
const path = require('path');

const app = express();

// const PORT = process.env.PORT || 3000;

const PORT = 3000;

app.use('/', express.static('public', {
    extensions: ['html', 'htm'],
}) );

app.use('/instaclone', express.static('instaclone/build', {
    extensions: ['html', 'htm'],
}) );

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pa123pa123'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
