### 1. Dockerfile: Setup environments
```
FROM golang:alpine # Environment

COPY . . # COPY <host-path> <container-path>

# Run while building image
RUN <command>

# Run while `docker-compose up` or `docker run`
CMD <command>
ENTRYPOINT <command>
```
Export Dockerfile to image:
```
docker build -t <image-name> <Dockerfile-directory-path>

# Ex
docker build -t app-demo .
```

### 2. docker-compose.yml: Declaring services
```yml
version: "3"
services:
    service-name:
        image: <app-image>
        container_name: <app-container>
        build:
            context: <Dockerfile-directory-path>
        ports: # Host mapping
            - "<host-port>:<container-port>"
        environment: # Declare environment variables
            - <name>=<value>
        env_file:
            - <.env file path>
```
Install docker-compose.yml:
```sh
docker-compose up # Will run image after install
```
Note: If you install with docker-compose, it will avoid some setups from Dockerfile such as `ENV`, `VOLUME`,... and just run `CMD`, `ENTRYPOINT`,... (Which instructions will run while running the containers).

### 3. localhost in Docker
Using `host.docker.internal:port` alternative.

### 4. Images
View all images:
```sh
docker images -a
```

Pull a image:
```sh
docker pull image-name
```

Create a new container from the image:
```sh
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

Remove a image:
```sh
docker images rm image-id
```

### 5. Containers
View running containers
```sh
docker ps
```

View all containers
```sh
docker container ls --all
```

Jump in a running container
```sh
docker container attach container-id
```

Rerun a stopped container
```sh
docker container start -i container-id
```

Remove a container:
```sh
docker container rm container-id
```

### 6. Clean systems
```sh
docker system prune
docker image prune
docker container prune

# Remove obsolete images
docker image prune --filter="dangling=true" -f

# Remove orphans containers
docker-compose up --remove-orphans [-d]
```

### Others
Run image with mount:
```sh
docker run -it --rm -v %cd%:/go/src/app image-uploader
```