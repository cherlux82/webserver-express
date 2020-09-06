const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.port || 3000;

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Cherlux"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {

    });
});


// app.get('/data', (req, res) => {
//     res.send("Hola Cherlux");
// });

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));