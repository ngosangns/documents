### 1. Dockerfile: Declaring environment
```
FROM golang:alpine
COPY . .
CMD ["command line"]
```

### 2. docker-compose.yml: Declaring services
```
version: "2"
services:
    service-name:
        build:
            context: Dockerfile-path
    db-name:
        image: mongo
        container_name: mongodb
        ports:
            - "27017-27017"
```
After configured yml file, run command below to install:
```
docker-compose up
```

### 3. localhost in Docker
Using `host.docker.internal:port` alternative

### 4. Images
View all images
```
docker images -a
```

Pull a image
```
docker pull image-name
```

Create a new container from the image
```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

Remove a image
```
docker images rm image-id
```

### 5. Containers
View running containers
```
docker ps
```

View all containers
```
docker container ls --all
```

Jump in a running container
```
docker container attach container-id
```

Rerun a stopped container
```
docker container start -i container-id
```

Remove a container
```
docker container rm container-id
```