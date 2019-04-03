var Memcached = require('memcached');
var memcached = new Memcached('localhost:11211', { retries: 10, retry: 10000 });
var express = require('express');
const app = express()

app.get('/set', function (req, res) {

  var key = req.query.key;
  var value = req.query.value;
  console.log(key);
  console.log(value);

  memcached.set(key, value, 10000, function (err, data) {
    var result = "Added data for " + key + ". Value is " + value + ". (Error is " + err +")";
    console.log(result);
    res.send(result);

  });

}
);

app.get('/get', function (req, res) {
  var key = req.query.key;
  console.log(key);
  memcached.get(key, function (err, data) {
    var result = "Get data for " + key + " Found data:" + data + " (Error is "+ err +" )";
    console.log(result);
    res.send(result);
    
  });
  
});

app.listen(8891)
console.log("server started on port " + 8891)




