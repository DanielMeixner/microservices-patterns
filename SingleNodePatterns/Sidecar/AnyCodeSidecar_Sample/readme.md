# Kubernetes Sample for Sidecar 
* starts a pod with 2 containers, nginx and danielmeixner/anycode
* creates a new service
* both share the same Processspace
* you can browse to http://<IPOFSERVICE>:8888/?command=top+-n+1 to display the processes including the process of the nginx container

Find details about the anycode container here: https://github.com/DanielMeixner/anycode-container