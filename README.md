# platform-on-docker

A local playground environment of Monetha Platform running on various blockchain networks.

## Requirements

The following applications need to be installed on your machine:
- docker
- docker-compose

## Commands

The playground environment is controlled using the following scripts:
- **./start.sh** - starts the environment. Has parameters that control which network is started, if private transactions are enabled.
- **./list.sh** - lists the environment information
- **./stop.sh** - stops the environment but does not remove the Docker containers
- **./resume.sh** - starts the stopped Docker containers in case if the machine was restarted or the environment was stopped
- **./remove.sh** - stops the environment and removes the Docker containers and various run artifacts

## Networks

The environment includes two networks:
- Quorum - based on Docker from [Quorum examples repo](https://github.com/jpmorganchase/quorum-examples.git).
- Pantheon - based on Docker from [Pantheon quickstart repo](https://github.com/PegaSysEng/pantheon-quickstart.git).