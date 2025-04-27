const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');

console.log("What's up");

const app = express();

const uri = "mongodb+srv://hjazur:lrok5cJJniFUIn6J@cluster0.ekjwssx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)
    .then((result) => app.listen(3000))
    .catch((err) => console.log("Lmao no"));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/about-us',(req, res) => {
    res.redirect('/about');
});

app.use('/blogs',blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', {title: 'UNFOUND'});
});