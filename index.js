const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.static('public'));

const Blog = require('./db');

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('layout', 'layouts/app');

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const blogs = await Blog.find();
    console.log(blogs);

    res.render('index', { blogs });
});

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.post('/blog', async (req, res) => {
    const blog = new Blog(req.body);
    await blog.save();

    res.redirect('/');
});

app.listen(3000, () => {
    console.log("App Listening in 3000...");
});