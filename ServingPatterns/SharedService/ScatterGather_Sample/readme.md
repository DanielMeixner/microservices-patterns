# Scatter/Gather Pattern
* apply the yaml
* open browser, navigate to http://svcip/?val=200
* first request will take some seconds, second will be significantly faster. 
* uses a stateful set under the hood. Requests are forwarded by "distiributor-pod" to three named "compute" instances in a stateful set

## for demo:
* k get svc
* k get ep
* log into a pod (kubectl exec -it anycode /bin/sh)
* nslookup compute-svc --> see named backends
* nslookup compute-svc-sfs-0.compute-svc.default.svc.cluster.local --> names resolve