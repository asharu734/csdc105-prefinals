const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { result } = requrie('lodash');
const blogRoutes = require('./routes/blogRoutes');

console.log("What's up");

const app = express();
app.set('view engine', 'ejs');
const dbURI = "mongodb+srv://hjazur:lrok5cJJniFUIn6J@cluster0.ekjwssx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404).render('404');
});