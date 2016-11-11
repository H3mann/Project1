var path = require('path');
var bodyParser = require('body-parser');
var cors = require("cors");
var express = require('express');
var webpack = require('webpack');
 var config = require('../../webpack.config');
// var router = require('./router')
var router = require('express').Router();
var request = require('request');

var app = express();

var compiler = webpack(config);
app.use(require('webpack-hot-middleware')(compiler));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(cors());
app.use(bodyParser.json());

//handing api calls

app.get('/redditInfo',function (req,res)  {
   console.log('inside app.get!!*', req.query)

   var reqURL = 'https://www.reddit.com/r/' + req.query + '.json'
   var options = { method: 'GET', uri: reqURL};

  request(options, (error, response, body) => {
       if (error) throw new Error(error);
       res.send(body);
  });

})

app.use("*", express.static(__dirname + "/../client/"))

app.listen(8000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8000');
});