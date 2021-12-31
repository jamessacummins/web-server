const express = require('express');
const path = require('path');

const app = express();

// const PORT = process.env.PORT || 3000;

const PORT = 3000;


/*
console.log(`__dirname is ${__dirname}`);

app.use('/test', express.static('instaclone/build'));

app.use(express.static('public', {
    extensions: ['html', 'htm'],
}));
*/

app.use('/', express.static('public') );

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
