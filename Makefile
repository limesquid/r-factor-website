SHELL=bash

###########################
# Install
###########################

install: backend--install frontend--install

frontend--install:
	cd frontend && make install

backend--install:
	cd backend && make install

###########################
# docker
###########################

docker--prod:
	docker compose up -d --build --remove-orphans

docker--down:
	docker compose down -v
