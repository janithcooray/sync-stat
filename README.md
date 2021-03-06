# Docker Storage Sync for Faster Development on MacOS and Windows

## !Still only works on MacOS, documentation is also incomplete. please wait till release 1.0 +

## Pleast note that this is a pre-release, functionality is still partial! <br> Wait for a newer update!!

[![CodeQL](https://github.com/janithcooray/sync-stat/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/janithcooray/sync-stat/actions/workflows/codeql-analysis.yml)
[![Node.js Package](https://github.com/janithcooray/sync-stat/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/janithcooray/sync-stat/actions/workflows/npm-publish.yml)

---

## What it does

sync-stat is an NPX CLI toolkit that offers an alternative to Docker Bind Mounts that is on par with Bind mounts on Linux Based FSs in terms of performance for MacOS.(Windows NTFS support is comming soon)

Docker with bind mounts can really cause a major performance penalty in MacOS (APPFS) and windows (NTFS)

Windows has WSL so it's not really effected but it would be nice if it would work as fast as bind mounts in linux in NTFS

sync-stat also offers some other options that docker cp / bind mounts do not offer. such as the ability to set an explicit user group and mode to the directory

---

## Installation

### Install via NPM

```sh
npm i sync-stat
```

## Configure - create `sync-compose.yaml`

create a YAML file named `sync-compose.yaml` at the root directory of your project

```yaml
version: 1

containers: #Array
  - name-of-container: #Array - must be defined in docker-compose or name container on start
      volumes: # Bind Mounts - Array
        - volume: # Item - config for each bind
            profile: local # profile names will group volumes, can use run <profilename> to activate only the volumes in the group. if empty it will be activated too.
            from: app/ # From location relative to <ProjectRoot> => app/  || does not support ./app yet
            to: /var/www/html/ # to location inside docker container
            mode: 775 # Mode to write files
            owner: www-data:www-data # owner to write files as
            cmd: #Run the Following commands on start, this only runs 1 time
              - npm install
              - composer install
            ignore: #ignore these directories when syncing
              - node_modules/
            replace: # replace these strings when copying
              - 'localhost:mysql-db'

database:
  driver: mysql # Currently only mysql is supported
  profile: staging # Profiles
  method: export # [ export | dump ]
  file: /path/to/dump.sql #[ ./relative | /absolute ]/path/to/dump.sql . will only be used when method is in export
  server: # externel server config
    database_user: user
    database_name: dbname
    database_pass: pass
    host: server.name
    port: 3306
  local: # local server config. external servers can  be used too
    provision: true # drop db if it exists, create if not exist. needs root password
    database_user: user
    database_name: dbname
    database_pass: pass
    root_password: root_password # only used for provision function
    host: localhost
    port: 3306
```

## Example

docker-compose.yml

```yml
version: '3.9'

services:
  wordpress:
    container_name: mytest-container
    image: some-image #REPLACE
    volumes:
      - ./app:/var/www/html # (IMPORTANT!) REMOVE THIS. sync-stat will Automaticall do this
      # MOUNT CANNOT MATCH THE ONE IN SYNC-COMPOSE
      # IF YOU DONT REMOVE THAT LINE, IT WILL CAUSE AN ERROR.
    ports:
      - '8000:80'
    ## application is placed at /var/www/html
```

sync-compose.yaml

```yaml
version: 1

containers:
  - mytest-container:
      volumes:
        - volume:
            profile: local
            from: app/
            to: /var/www/html/
            mode: 775
            owner: www-data:www-data
            cmd:
              - echo hi
            ignore:
              - node_modules/
            replace:
              - 'string:string'
```

## RUN

### Start your docker container or compose setup

make sure to name the container with matching names defined in the sync-compose.json

### Start Sync

Once Containers are online run the following in the root directory

```sh
npx syncstat run
```

running profiles

```sh
npx syncstat run <profilename>
```

when using run `<profilename>`, only volumes that match the profile name will be added. volumes without profile names will be added as well.

### Running DB

```sh
npx syncstat db
```

or with profiles

```sh
npx syncstat db <profile>
```
