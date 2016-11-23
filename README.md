# docker

```bash
$ docker build -t my-node node/Dockerfile
$ docker build -t my-nginx nginx/Dockerfile
$ docker build -t my-haproxy haproxy/Dockerfile

$ docker run -d -p 3000:3000 --name my-node-1 --restart always my-node
$ docker run -d -p 8080:80 --name my-nginx-1 --restart always my-nginx
$ docker run -d -p 80:80 --name my-haproxy-1 --restart always my-haproxy

$ docker run -d -p 27017:27017 --name mongo-1 -v /my/own/datadir:/data/db --restart always mongo
```
