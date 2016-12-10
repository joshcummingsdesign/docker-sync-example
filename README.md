# Docker-Sync Example

An example of docker-sync in action!

## Requirements

* [docker-sync](https://github.com/EugenMayer/docker-sync/wiki/1.-Installation)

## Getting Started

1. Run `gulp` to compile assets
2. Run `docker-sync-stack start` to fire up docker-sync
3. In another terminal window run `gulp watch` to watch for sass changes

## Known issues

* You have to save a couple of times because browser-sync can inject css into the page faster than docker-sync can rsync