var fs = require('fs');
var http = require('http');

var express = require('express')
var bodyParser = require('body-parser')
var simplecache = [];
const port = 8893;

var counter=0;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// whenever called counts primes.
app.use('/', function (req, response) {
    console.log(counter++);
    var arr = req.body;           
    var primecount=0;
    arr.numerarray.forEach(element => {
        if(isPrime(element))
        {
            primecount++;
        }
    });
    response.send(primecount+"");    
});


http.createServer(app).listen(port);
console.log ("listening on "+port+" for POSTed arrays of number of the form {\"numberarray\":[1,2,3]} . Will return number of primes.")


function isPrime(n) {
    console.log("is prime")
    var cachedResult=simplecache[n];
    if (cachedResult!=null)
    {
        console.log ("found in cache " + n);
        return cachedResult;
    }
    
    // simulate heavy compute load and waste some time
    sleep(200);
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    var m=Math.sqrt(n);
    for (var i=2;i<=m;i++) if (n%i==0) 
        {
            simplecache[n]=false;
            return false;
        }
        simplecache[n]=true;
    return true;
}

// simple sleep function to get a nice delay
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }