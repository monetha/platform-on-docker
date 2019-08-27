#!/bin/sh -u
set -e

NO_LOCK="false"

# Add helpers
. ./helpers/defaults.sh
. ./helpers/common.sh

resume_network
resume_scanner