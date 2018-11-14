# Dockerized Inquirer

This is a small Dockerized implementation of GraphQL Inquirer. It is meant to be deployable through Docker Hub.

## Building, running and pushing

* Build the container with `make dockerbuild`
* Run the container on `localhost:8080` with `make dockerrun`
* Push the container to Docker Hub with `make dockerpush` (given you have a docker login set up)

## Updating the proxy path

Since the whole purpose of GraphQL Inquirer is to be able to query _any_ GraphQL API, it is quite a bummer if we can't update the url. Luckily, here's the steps:

If we for example have an API on `https://my.sweet.gql/api`

1. Edit `deploy/webapp.conf` and look at the first `location` clause. It should contain a `proxy_pass` statement.
	* Replace the path with the _last URI component_ of your URL.
	* Replace the url after `proxy_pass` with the one to you API.
		* With above example we get `location /api { proxy_pass https://my.sweet.gql/api; }`
1. Edit `src/index.jsx`
	* Change the `endpoint` variable to the last URI component of the url
		* With the example that's `let endpoint = '/api';`
