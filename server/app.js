var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/calculate', function(req, res) {
	console.log('Calculation request received!');
	var val = req.query.value;
	console.log(val);
	//console.log(req.query);
	// Multiply the number by 2
	x = val *2;

	console.log(x);

	res.send(x.toString());

});

app.listen(1337, function () {
  console.log('Listening on port 1337');
});