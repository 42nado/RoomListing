const mongoose = require("mongoose");
const Listing = require("./models/listing");

mongoose.connect("mongodb://localhost:27017/trylist")
  .then(() => {
    console.log("Mongoose Connection OPen!");
  })
  .catch((err) => {
    console.log("MOngoose conection error");
    console.log(err);
  });


const p = new Listing({
    nameOfListing: "Golden Hotel",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    address: "Brgy. Dinahican Infanta, Quezon",
    picture: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    category: "Resort",
})



// const seedList = [
//   {
    // nameOfListing: "Tres Pinos",
    // description: "Hello world",
    // address: "Brgy. Binulasan Infanta, Quezon",
    // picture:
    //   "Photo by Pixabay from Pexels: https://www.pexels.com/photo/palm-trees-at-night-258154/",
    // category: "Resort",
//   },
// ];

// List.insertMany(seedList)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


  p.save()
    .then(p => {
        console.log(p);
    })
    .catch(e => {
        console.log(e);
    })