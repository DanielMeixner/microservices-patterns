# Sharded Service on Kubernetes sample
This sample is inspired by Brendan Burns chapter on Serving Patterns in his book on Distributed Systems (https://learning.oreilly.com/library/view/designing-distributed-systems/9781491983638/ch06.html).

This sample shows 2 patterns in action

## Ambassador pattern
The sharded-memcache-ambassador pod contains two containers. (see yaml) twemproxy acts as ambassador, it redirects caching requests to one of the instances of memcached. Therefore it uses a hashing function specified in the configmap (fnv1a_64). 

## Sharded Service pattern
The Shared Service pattern is implemented here for the cache which is distributed across three instances of memcached.


## How to use

* Apply the yaml file in your Kubernetes cluster
* You'll get a pod with 2 containers and 3 instances of memcached pod.
* Check the services for a service called shared-memcache-ambassador (kubectl get svc)
* call http://<PUBLICIPOFSERVICE>:8891/set?key=mykey&value=myvalue to store a value in the cache
* call http://<PUBLICIPOFSERVICE>:8891/get?key=mykey to get the value from the cache

