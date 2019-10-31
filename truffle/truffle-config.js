const PrivateKeyProvider = require("truffle-hdwallet-provider");
const besuKeys = require("../helpers/keys_besu.js");
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
    besu: {
      provider: new PrivateKeyProvider(besuKeys.privateKeys, "http://rpcnode:8545", 0, besuKeys.privateKeys.length),
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
