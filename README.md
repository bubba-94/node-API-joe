# NodeJS API

Modified from here [Introduction to Docker for Javascript Developers (feat Node.js and PostgreSQL)](https://dev.to/alexeagleson/docker-for-javascript-developers-41me), with all
irrelevant experiments removed. Also presumably docker is already
installed.

## Clone

with

<pre>
git clone https://github.com/TomasKindahl/node-API.git
cd node-API
</pre>

## Install express

<pre>
npm ci express
</pre>

## Running as server on your host computer

This is for NodeJS API development purposes, if you only
need to run NodeJS in docker, jump to section
[Running with docker](https://github.com/TomasKindahl/node-API?tab=readme-ov-file#running-with-docker)!

<pre>
npm run start
</pre>

Now lookup [localhost:8080](http://localhost:8080/)!

## Running with docker

For any <i style="background: yellow"><b>n</b></i> 

<pre>
docker build -t nodeapi:v<i style="background: yellow"><b>n</b></i> .
</pre>

<pre>
docker run -d -p 5080:8080 nodeapi:v<i style="background: yellow"><b>n</b></i>
</pre>

Now lookup [localhost:5080](http://localhost:5080/)!