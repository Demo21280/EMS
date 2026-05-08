const express = require('express');
const cors = require('cors');
const user = require('./routes/users');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbData') 
.then(() => console.log('Connected to MongoDB'))

const server = express();
const PORT = 3000;
server.use(cors());
server.use(express.json());
server.get('/', (req, res) => {
    res.send('Hello, World!');

});

server.use('/user', user);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});