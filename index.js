const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5100

const chefs = require('./data/chefs.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chefs are cooking');
})
app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const seletedChef = chefs.find(chef => chef.id === id);
    res.send(seletedChef);
})
app.listen(port, () => {
    console.log('Dragon API is running on port', port);
})