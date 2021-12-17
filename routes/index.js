var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let product=[
    {
      name:"IPHONE11",
      category:"Mobile",
      description:"Made by Apple",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7IqsxP73GBMVQ8x1E0uD_Xcp91bWpEtgRQ&usqp=CAU"
    },
    {
      name:"REALME",
      category:"Mobile",
      description:"Made by Andriod",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev97Z16t0agzTwo51F8dGHiJfowSwbYfnyA&usqp=CAU"
    },
    {
      name:"OPPO",
      category:"Mobile",
      description:"Made by Andriod",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPR-DWeBPZIDdQjqcqltoq8SihSPhA0MwTg&usqp=CAU"
    },
    {
      name:"XIAOMI",
      category:"Mobile",
      description:"Made by Andriod",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSNG7QkqSY3jqXpige6xPloO0knLgJe_Zvw&usqp=CAU"
    },

  ]
  res.render('index',{product});
});
 
module.exports = router;
