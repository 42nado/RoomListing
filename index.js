const express = require('express');
const { render } = require('ejs');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const User = require('./models/users');
const Comment = require('./models/comment');
const methodOverride = require('method-override');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const session = require('express-session');
//use .env file to store api key
require('dotenv').config();
const port = process.env.PORT || 5000;

// require('mongoose-type-url');

mongoose.connect(process.env.MONGO_URI)
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
// authentication configuration
app.use(methodOverride('_method'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }));

app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy());

app.use( function (req, res, next) {
    user = req.user;
    next();
})



passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());


const categories = ['hotel', 'cabin', 'resort'];



// view all listings
app.get('/home', async (req, res) => {
    const listings = await Listing.find({});
    // console.log(listings);
    res.render('home', {listings});
    
})

// view specific listing
app.get('/home/:id', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate('comments').exec();
    // console.log(listing);
    res.render('details', { listing, categories });
})

app.get('/login', (req, res) => {
    res.render('login');
})

//login validation post route check if user is in the database and if the password is correct then redirect to home page or else redirect to login pagea and send alert message
app.post('/login', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, (err) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, () => {    
                res.redirect('/home');
            })
        }
    })
})


// app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
//     res.redirect('/home');


// })  




// app.post('/login', (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//         })
//     req.login(user, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             // passport.authenticate('local')(req, res, () => {
//                 console.log('login successful');
//                 console.log(req);
//                 res.redirect('/home');
//             // })
//         }
//     })
// })

// for form for adding new listing
app.get('/listing/new', isLoggedIn, (req, res) => {
    res.render('new', { categories });
})

// inserting a new listing
app.post('/listing', async (req, res) => {
    const newListing = new Listing(req.body);
    // console.log(newListing)
    await newListing.save();
    res.redirect(`/home/${newListing._id}`);
})

// for form for editing a listing
app.get('/listing/:id/edit', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    // console.log(listing);
    res.render('edit', { listing, categories });
})

// updating a listing
app.put('/listing/:id', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    // console.log(listing);
    res.redirect(`/home/${listing._id}`);

})

// deleting a listing
app.delete('/listing/:id', async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect('/listing/mylisting');
})

app.get('/listing/mylisting', async (req,res) =>{
    const listings = await Listing.find({});
    res.render('mylisting', {listings});
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/home');
        })
    })
})

app.get('http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC', (req, res) => {
    res.render('home');
})

// app.post('/register', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = new User({ username });
//         const registeredUser = await User.register(user, password);
//         console.log(registeredUser);
//         res.redirect('/home');
//     } catch (e) {
//         res.redirect('/register');
//     }
// })
// logout
app.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    })
})

//comment post route
app.post('/home/:id/comment', isLoggedIn, async (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body.comment);
    // author should log in to comment
    //to make sure that the user is logged in
    const comment = new Comment({
        author: user.username,//req.user.username,
        comment: req.body.comment
    });
    comment.save((err, comment) => {
        if (err) {
            console.log(err);
        }else {
            Listing.findById(req.params.id, (err, listing) => {
                if (err) {
                    console.log(err);
                }else {
                    
                    listing.comments.push(comment);
                    listing.save();
                    console.log("listing");
                    console.log(listing.comments);
                    res.redirect(`/home/${req.params.id}`);
                }
            })
            
           
        }

    })
        
})

// middleware to check if user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }else {
    res.redirect('/login');
    }
}


app.get('*', (req, res) => {
    res.render('notfound');
})


app.listen(port, () => {
    console.log("Server started on port " + port)
})