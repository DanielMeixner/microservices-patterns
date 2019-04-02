# Kubernetes Sample for Config Sidecar 
* starts a pod with 2 containers, danielmeixner/configdisplaycontainer and danielmeixner/configwritercontainer
* creates a new service
* both share the same mounted volume
* post a json object to configwritercontainer (:8890). This modifies a file in the share.
* access configdisplaycontainer (:80). This displays the new config.


