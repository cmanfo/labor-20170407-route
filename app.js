const express = require('express');

const root = require('./handlers/root');
const about = require('./handlers/about');
const tweets = require('./handlers/tweets');


const app = express();

app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/', root);

app.get('/about', about);

app.get('/tweets', tweets);

app.listen(8080,(err) => {
    if (err) {
        console.error(err.message);

        return;
    }
    console.log("Server is running ...");
});
