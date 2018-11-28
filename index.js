const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


app.use('/public', express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home/index');
});

app.listen(4500, () => {
    console.log('Listening on port 4500');
});