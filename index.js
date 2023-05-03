const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5100

const chefs = require('./data/chefs.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is running');
})
app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.listen(port, () => {
    console.log('Dragon API is running on port', port);
})