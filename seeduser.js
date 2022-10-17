const mongoose = require("mongoose");
const User = require("./models/users");


mongoose.connect("mongodb://localhost:27017/listing")
  .then(() => {
    console.log("Mongoose Connection OPen!");
  })
  .catch((err) => {
    console.log("MOngoose conection error");
    console.log(err);
  });


const seedUsers = [
    {
        username: 'testuser',
        password: '1234'
      },{
        username: 'test',
        password: 'test'
      },{
        username: 'admin',
        password: 'admin'
      }
];


User.insertMany(seedUsers)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
