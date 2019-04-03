# Microservices patterns in Kubernetes
This repository contains implementations of Microservice patterns implemented for Kubernetes. It is heavily inspired by Brendan Burns book on Designing Distributed Systems.(Free download here: https://azure.microsoft.com/en-us/resources/designing-distributed-systems/en-us/)

All samples are meant to work by simply applying a yaml file to your Kubernetes cluster. I used Azure Kubernetes Service for the implementation but most of the samples should work out of the box on any Kubernetes installation.
All container images used are on docker hub. The source code of images I created should be available on github already or will be there soon.

The sample apps are mostly node web apps without any fancy UI - or no UI at all. I really wanted to keep implementation minimal to focus on the pattern, not the app.

## Patterns found
* Sidecar - for reuse ([anycode sample](SingleNodePatterns\Sidecar\AnyCodeSidecar_Sample\readme.md))
* Sidecar - for configuration ([ConfigSidecar](SingleNodePatterns\Sidecar\ConfigSidecar_Sample\readme.md))
* Ambassador ([part of SharedService sample](ServingPatterns\SharedService\readme.md) )
* Shared Services - for caching ([SharedService sample](ServingPatterns\SharedService\readme.md))
