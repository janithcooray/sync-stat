# Docker Volume Sync for Faster Storage Sync
---
## Pleast note that this is a pre-release, functionality is still partial! <br> Wait for a newer update

---
## WTF is this?

---

## Installation

### Install via NPM
```sh
npm install sync-stat
```

post installtion - add script to package.json

```sh
node node_modules/sync-stat/index -m install
```

## Configure - create `sync-compose.json`

create a JSON file named `sync-compose,json` at the root directory of your project


### Basic config

sync every change from ./app/* to container-name:/var/www/html 

```json
{
    "containers":{
        "container-name":{
            "/path/to/container":"app"
        }
    }
}
```


### Multiple Containers

to add multiple containers, add the 2nd container name after 1st container

```json
{
    "containers":{
        "container-name":{
            "/path/to/container":"app"
        },
        "another-container-name":{
            "/another/path":"same/path"
        },
    }
}
```

### Multiple Volumes per Container

```json
{
    "containers":{
        "container-name":{
            "/path/to/container":"app",
            "/another/path/to/container":"another/folder"
        }
    }
}
```

## Example

docker-compose.yml
```yml
version: "3.9"
    
services:
  wordpress:
    container_name: mytest-container
    image: some-image #REPLACE
    volumes:
     - ./app:/var/www/html # (IMPORTANT!) REMOVE THIS. sync-stat will Automaticall do this
     # MOUNT CANNOT MATCH THE ONE IN SYNC-COMPOSE
     # IF YOU DONT REMOVE THAT LINE, IT WILL CAUSE AN ERROR. 
    ports:
      - "8000:80"
    ## application is placed at /var/www/html
```
sync-compose.json

```json
{
    "containers":{
        "mytest-container":{
            "/var/www/html":"app"
        }
    }
}
```


## RUN

### Start your docker container or compose setup

make sure to name the container with matching names defined in the sync-compose.json

### Start Sync

```sh
npm run sync-stat
```