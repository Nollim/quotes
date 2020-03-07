export PROJECT_ROOT ?= $(shell pwd)
export CI_PROJECT_NAME ?= quotes

docker-compose-up:
	docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml up -d --remove-orphans

docker-compose-down:
	docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml down -v

docker-compose-restart:
	docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml restart node traefik

node-start:
	@docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml run --rm node /start.sh

node-bash:
	@docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml run --rm node /bin/bash

import-data:
	@docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml run --rm mysql mysql -uquotes -pquotes quotes < data/quotes.sql

deliver:
	rsync -avh ./*  pi@192.168.0.37:/home/pi/quotes

start-distant:
	ssh  pi@192.168.0.37 /home/pi/quotes/scripts/start.sh
	
	