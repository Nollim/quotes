export PROJECT_ROOT ?= $(shell pwd)
export CI_PROJECT_NAME ?= drupal-wework

SUPPORTED_COMMANDS := docker-compose-dev-up drush cache-clear composer-require drupal-bin
SUPPORTS_MAKE_ARGS := $(findstring $(firstword $(MAKECMDGOALS)), $(SUPPORTED_COMMANDS))
ifneq "$(SUPPORTS_MAKE_ARGS)" ""
  COMMAND_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(COMMAND_ARGS):;@:)
endif

docker-compose-dev-up:
	docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose-dev.yml up -d --remove-orphans

docker-compose-dev-down:
	docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose-dev.yml down -v

docker-compose-up:
	docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml up -d --remove-orphans

docker-compose-down:
	docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose.yml down -v	

node-bash:
	@docker-compose -f ${PROJECT_ROOT}/config/docker/docker-compose-dev.yml run --rm node /bin/bash

deliver:
	scp -r -p ./*  pi@192.168.0.37:/home/pi/hello-world
	