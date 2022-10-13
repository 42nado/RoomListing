const express = require('express');
const { render } = require('ejs');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const methodOverride = require('method-override');
// require('mongoose-type-url');

mongoose.connect('mongodb://localhost:27017/trylist')
    .then(() => {
        console.log('Mongo Connection Open!');
    })
    .catch(err => {
        console.log('Mongo Connection Error!');
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // this is to parse the body of the request    
app.use(methodOverride('_method'));


const categories = ['Hotel', 'Cabin', 'Resort'];


// view all listings
app.get('/home', async (req, res) => {
    const listings = await Listing.find({});
    console.log(listings);
    res.render('home', {listings});
    
})

// view specific listing
app.get('/home/:id', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render('details', { listing });
})



app.get('/login', (req, res) => {
    res.render('login');
})

// for form for adding new listing
app.get('/listing/new', (req, res) => {
    res.render('new', { categories });
})

// inserting a new listing
app.post('/listing', async (req, res) => {
    const newListing = new Listing(req.body);
    // console.log(newListing)
    await newListing.save();
    res.redirect(`/listing/${newListing._id}`);
})


app.get('*', (req, res) => {
    res.render('notfound');
})


app.listen(3000, () => {
    console.log("Server strted on port 3000!")
})