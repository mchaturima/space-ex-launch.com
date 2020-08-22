const express = require('express');
const app = express();
const path = require('path');

// const publicPath = path.join(__dirname, '.', 'public');

const port = process.env.PORT || 3001;

// app.use(express.static(publicPath));

app.use('/', express.static(path.join(__dirname, './public/index.html')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});