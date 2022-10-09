const express = require('express');
const {render} = require('ejs');
const app= express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('*', (req,res) =>{
    res.render('notfound')
})


app.listen(3000, () =>{
    console.log("Server strted on port 3000!")
})