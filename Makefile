DOCKER_COMPOSE := docker-compose -f docker-compose.yml
WEB := ${DOCKER_COMPOSE} run web

# Build
build:
	@${DOCKER_COMPOSE} build
# Start
start:
	@${DOCKER_COMPOSE} up -d
# Stop
stop:
	@${DOCKER_COMPOSE} down --remove-orphans -v
# Restart
restart:
	@${DOCKER_COMPOSE} restart
# Web Shell
shell: 
	@${WEB} sh
# Log web
logs: 
	@${DOCKER_COMPOSE} logs -f web