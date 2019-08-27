const PassportLogic = artifacts.require("PassportLogic");
const PassportLogicRegistry = artifacts.require("PassportLogicRegistry");

module.exports = function (deployer, network, accounts) {
    const keys = require("../../helpers/keys_" + network + ".js");

    let contractCreationParams = {};
    contractCreationParams.from = accounts[0];

    if (process.env.PRIVATE_TRANSACTIONS == "true") {
        switch (network) {
            case "quorum":
                contractCreationParams.privateFor = keys.nodePublicKeys[1];
                break;
            default:
                throw "Private transaction configuration missing for this typo of network"
        }

    }
    deployer.deploy(PassportLogicRegistry, '0.1', PassportLogic.address, contractCreationParams)
};
