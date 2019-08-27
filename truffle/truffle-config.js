const PrivateKeyProvider = require("truffle-hdwallet-provider");
const pantheonKeys = require("../helpers/keys_pantheon.js");
const quorumKeys = require("../helpers/keys_quorum.js");

module.exports = {
  networks: {
    quorum: {
      provider: new PrivateKeyProvider(quorumKeys.privateKeys, "http://node1:8545", 0, quorumKeys.privateKeys.length),
      timeoutBlocks: 100,
      network_id: "*",
      type: "quorum",
      gasPrice: 0,
    },
    pantheon: {
      provider: new PrivateKeyProvider(pantheonKeys.privateKeys, "http://rpcnode:8545", 0, pantheonKeys.privateKeys.length),
      timeoutBlocks: 100,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
}
