#!/bin/sh -u
set -e

NO_LOCK="true"

# Add helpers
. ./helpers/defaults.sh
. ./helpers/common.sh

while [ $# -gt 0 ]; do
    case "${1}" in
        -h|--help)
            displayUsage
            ;;
        -n|--network)
            case "${2}" in
                quorum|pantheon)
                    MTH_NETWORK="${2}"
                    ;;
                *)
                    echoerr "Error: Unknown network name"
                    displayUsage
            esac
            shift 2
            ;;
        -p|--private)
            case "${2}" in
                true|false)
                    MTH_PRIVATE="${2}"
                    ;;
                *)
                    echoerr "Error: use true or false to indicate if private transactions should be used"
                    displayUsage
            esac
            shift 2
            ;;
        --) # end argument parsing
            shift
            break
            ;;
        -*|--*=) # unsupported flags
            echoerr "Error: Unsupported flag"
            displayUsage
            ;;
    esac
done

if [ -z "${MTH_NETWORK}" ]; then
    echo "MISSING PARAMETER: --network"
    displayUsage
fi

if [ -z "${MTH_PRIVATE}" ]; then
    echo "MISSING PARAMETER: --private"
    displayUsage
fi

start_network "${MTH_NETWORK}" "${MTH_PRIVATE}"
run_migrations
output_contract_addresses
build_scanner "${MTH_NETWORK}"
start_scanner
list_data