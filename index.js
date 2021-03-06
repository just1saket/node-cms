const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/cms', {useNewUrlParser: true}).then(
    function (db) {
        console.log('Mongo Connected');
    }
).catch( err => console.log(err));


app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Load Routes
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');


app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);


app.listen(4500, () => {
    console.log('Listening on port 4500');
});