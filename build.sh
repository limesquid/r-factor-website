#!/bin/bash

export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

docker builder prune -a -f
docker container prune -f
docker-compose build
