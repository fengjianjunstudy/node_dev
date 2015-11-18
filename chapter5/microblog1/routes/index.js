var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	var  slides=[{"imgUrl":"/images/1.jpg","href":"#1","title":"First Thumbnail label","dscrpt":"dscrpt1"},{"imgUrl":"/images/2.jpg","href":"#2","title":"Second Thumbnail label","dscrpt":"dscrpt2"},{"imgUrl":"/images/3.jpg","href":"#3","title":"Third Thumbnail label","dscrpt":"dscrpt3"}]
  res.render('index', { title1: 'Express',slides:[{"imgUrl":"/images/1.jpg","href":"#1","title":"First Thumbnail label","dscrpt":"dscrpt1"},{"imgUrl":"/images/2.jpg","href":"#2","title":"Second Thumbnail label","dscrpt":"dscrpt2"},{"imgUrl":"/images/3.jpg","href":"#3","title":"Third Thumbnail label","dscrpt":"dscrpt3"}] });
});

module.exports = router;
