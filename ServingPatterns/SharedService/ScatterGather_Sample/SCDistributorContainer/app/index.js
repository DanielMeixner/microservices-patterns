const request = require('request');
const express = require('express');
const port = 8892;
const app = express();


// using a stateful set, these names resolve in K8s
var backend0 = "http://compute-svc-sfs-0.compute-svc:8893"
var backend1 ="http://compute-svc-sfs-1.compute-svc:8893"
var backend2 ="http://compute-svc-sfs-2.compute-svc:8893"

// var backend0 = "http://localhost:8893"
//  var backend1 ="http://localhost:8893"
//  var backend2 ="http://localhost:8893"

var max=1;
var array0 =[];
var array1= [];
var array2 =[];


// distribute load equally 
function distibuteLoad(nr)
{
array0 =[];
array1= [];
array2 =[];

var count=0;
for(i=0;i<=max;i++)
{    
    count++;
    count= count%3;
    switch (count) {
        case 0:
            array0.push(i+1);
            //array0.push(inputArray[i]);
            break;
        case 1:
            array1.push(i+1);
            //array1.push(inputArray[i]);
            break;
        default:
            array2.push(i+1);
            //array2.push(inputArray[i]);
            break;
    }
}
console.log("distributed load - array lenght:")
}


const getNrOfPrimesFromBackend = function(url,nrarray)
{    
    return new Promise((resolve, reject) => {
    var requestData = nrarray;
    var data = {
        url: url,
        json: true,
        body: {"numerarray":requestData}
    }

    request.post(data, function(error, httpResponse, body){
        console.log(body);
        resolve(httpResponse.body);
    });            
});
}



 app.get('/', function (req, res) {
        max = req.query.val;
        distibuteLoad(max);
        console.log("Max value is " +max);
     var p1 = getNrOfPrimesFromBackend(backend0,array0);
     var p2 = getNrOfPrimesFromBackend(backend1,array1);
     var p3 = getNrOfPrimesFromBackend(backend2,array2);
    
     Promise.all([p1,p2,p3]).then((myresult) => { 
         var sum=0;

         myresult.forEach(element => {
        console.log("result"+element)
         sum+=element;
         });
        console.log("sending back" + sum)
        res.send(sum+"");
     })     
    .catch((err) => console.error(err));
});





app.listen(port);
console.log("running & listening on " + port+". Wait for a call like http://IP:8892/?val=100 to compute the number of primes between 0 and 100.")