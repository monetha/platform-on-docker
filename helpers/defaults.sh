#!/bin/sh

## Lock file
export LOCK_FILE="${PWD}/.lock"
export CONTRACT_OUTPUT_FILENAME="contracts.log"

## Scanner
export NODEJS_VERSION=10
export MTH_SCANNER_REPO="https://github.com/monetha/passport-scanner.git"
export MTH_SCANNER_TAG=""
export MTH_SCANNER_PORT="0"

export MTH_CONTRACTS_REPO="https://github.com/monetha/reputation-contracts.git"
export MTH_CONTRACTS_TAG=""

## Default netwokr
export MTH_NETWORK="quorum"

## Private transactions disabled by default
export MTH_PRIVATE="false"

## NETWORKS
### QUORUM
export MTH_QUORUM_REPO="https://github.com/jpmorganchase/quorum-examples.git"
export MTH_QUORUM_TAG=""
### PANTHEON
export MTH_PANTHEON_REPO="https://github.com/PegaSysEng/pantheon-quickstart.git"
export MTH_PANTHEON_TAG=""