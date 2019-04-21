var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Product = require('../mongoSchema/product');

/* GET product category pages page. */


router.get('/*', function(req, res, next) {

  console.log('Made it!');

  mongoose.connect('mongodb+srv://Andrew:zRU9AvitXI6ksbiU@cluster0-gbspm.mongodb.net/lamode?retryWrites=true', { useNewUrlParser: true} )
  .then(() => {
  //mongoose.connect('mongodb+srv://Andrew:zRU9AvitXI6ksbiU@cluster0-gbspm.mongodb.net/lamode?retryWrites=true');
  //console.log('paht' + req.path);
  //console.log('bdy path' + req.body.path);
    var pathArray = req.path.split('/');
    if (typeof pathArray[3] === 'undefined'){
      if (typeof pathArray[2] === 'undefined') {
        pathArray[2] = {$exists: true};
      }
      if (pathArray[1] == 'all') {
        pathArray[1] = {$exists: true};
      }
      Product.find({category: pathArray[1], subcategory: pathArray[2]}, function(err, productData){
        if(err){ console.log('hit an error' + err)}
        console.log(productData);
        res.status(200).send(productData);
      });
    } else {
      Product.findOne({link: pathArray[3]}, function(err, productData){
        res.status(200).send(productData);
      });
    }
  },
  err => { mongoose.disconnect(); }
  )

}

);


module.exports = router;
