const mongoose = require("mongoose");
const Comment = require("./models/comment");

mongoose.connect("mongodb://localhost:27017/listing")
  .then(() => {
    console.log("Mongoose Connection OPen!");
  })
  .catch((err) => {
    console.log("MOngoose conection error");
    console.log(err);
  });


  const seedcomment = [{
    author: "testuser",
    comment: "nice place"
  },{
    author: "testuser",
    comment: "Gannda naman dito⭐"
  },{
    author: "admin",
    comment: "nice place"
  },{
    author: "admin",
    comment: "babalik ulit kami dito"
  },{
    author: "admin",
    comment: "sarap mag langoy ☺️"
  },{
    author: "testuser",
    comment: "yes gandang matulog dito 😴😪"
  }];




  Comment.insertMany(seedcomment)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
