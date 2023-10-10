const express = require('express');
const phones = require("./phones.json");
var cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.get('/', (req, res) => {
    res.send('Bello!')
})

app.get("/phones", (req, res) => {
    res.send(phones);
})
app.get("/phone/:id", (req, res) => {
    const id = req.params.id;
    console.log(`I need data for ${id}`);
    const phone = phones.find(phone => phone.id === parseInt(id));
    res.send(phone);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})