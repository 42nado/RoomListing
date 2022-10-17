const mongoose = require("mongoose");
const Listing = require("./models/listing");

mongoose.connect("mongodb://localhost:27017/listing")
  .then(() => {
    console.log("Mongoose Connection OPen!");
  })
  .catch((err) => {
    console.log("MOngoose conection error");
    console.log(err);
  });


// const p = new Listing({
//     nameOfListing: "Golden Hotel",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
//     address: "Brgy. Dinahican Infanta, Quezon",
//     picture: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     category: "Resort",
// })



const seedList = [
  {
    nameOfListing: "Tres Pinos ",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    address: "Tres Pinos Beach Resort, Infanta, Quezon ",
    addressmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.481796805216!2d121.68692091420827!3d14.741864777552875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398296f726b9805%3A0x4e6add9abd0cdbf!2sTres%20Pinos%20Beach%20Resort!5e0!3m2!1sen!2sph!4v1665926268220!5m2!1sen!2sph ",
    picture: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "resort",
    price: 1000,
    nameOfOwner: "test",
    idOfOwner: "634c0402d385ba5832467b67",
  },{
    nameOfListing: "Casa Virginia Maria Infanta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    address: "7 Purok Mangga Barangay, Infanta, 4336 Quezon    ",
    addressmap: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7716.987309534046!2d121.68568708385315!3d14.74119556857377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33982913146e00a3%3A0x3b0ea9dc4029c867!2sCasa%20Virginia%20Maria%20Infanta!5e0!3m2!1sen!2sph!4v1665926771300!5m2!1sen!2sph ",
    picture: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    category: "resort",
    price: 500,
    nameOfOwner: "test",
    idOfOwner: "634c0402d385ba5832467b67",
 
  },{
    nameOfListing: "Pag-Ibig Prayer Garden",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    address: "PMM7+GMP, Infanta, Quezon",
    addressmap: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7717.189837830032!2d121.66341805587571!3d14.735479473959348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339829a2e6c466e5%3A0x45f3bb8309910e4f!2sPag-Ibig%20Prayer%20Garden!5e0!3m2!1sen!2sph!4v1665926913644!5m2!1sen!2sph",
    picture: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    category: "cabin ",
    price: 200,
    nameOfOwner: "testuser",
    idOfOwner: "634c03a3d385ba5832467b57",
  },{
    nameOfListing: "Puerto Real Resort ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi. In vitae turpis massa sed elementum tempus. Aenean sed adipiscing diam donec adipiscing. Molestie at elementum eu facilisis sed ",
    address: "MJF2+8MC, Barangay Kawayan, Real, Real ",
    addressmap: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25964.48027251115!2d121.60913842277012!3d14.676176350331009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339788727ecd6e0f%3A0x34e0daeb080b9f91!2sPuerto%20Real%20Resort!5e0!3m2!1sen!2sph!4v1665927019239!5m2!1sen!2sph ",
    picture: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    category: "resort",
    price: 500,
    nameOfOwner: "testuser",
    idOfOwner: "634c03a3d385ba5832467b57",

  },{
    nameOfListing: "J. Vergara Hotel ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at lectus urna. Imperdiet dui accumsan sit amet nulla facilisi. Mattis ullamcorper velit sed ullamcorper morbi. Suspendisse interdum consectetur libero id.",
    address: "M.L. Quezon Avenue Poblacion Uno, Real, 4335 Quezon Province",
    addressmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30878.19358342756!2d121.57016181562503!3d14.668751900000021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339789e285d693af%3A0xf8576c8bdde50fe0!2sJ.%20Vergara%20Hotel%20and%20Resort!5e0!3m2!1sen!2sph!4v1665927239975!5m2!1sen!2sph",
    picture: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "hotel ",
    price: 700,
    nameOfOwner: "admin",
    idOfOwner: "634c08053065b2df956a5557",
  }
];

Listing.insertMany(seedList)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


  // p.save()
  //   .then(p => {
  //       console.log(p);
  //   })
  //   .catch(e => {
  //       console.log(e);
  //   })