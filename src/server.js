const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/myapi3', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);

// app.get('/', (req, res) => {
//     // return res.send('Hello');
//     return res.json({ message: 'Hello'});
// });

// app.post('/users', (req, res) => {
//     return res.json({ message: 'Users'});
// });

// app.get('/users', (req, res) => {
//     return res.json({ idade: req.query.idade });
// });

// app.put('/users/:id', (req, res) => {
//     return res.json({ id: req.params.id });
// });

// app.put('/users', (req, res) => {
//     return res.json(req.body);
// });


app.listen(3000);


