module.exports = function (callback) {
    var fs = require('fs');

    const PassportLogic = artifacts.require("PassportLogic");
    const PassportLogicRegistry = artifacts.require("PassportLogicRegistry");
    const PassportFactory = artifacts.require("PassportFactory");

    var data = `contractPassportLogic:${PassportLogic.address}\n` +
        `contractPassportLogicRegistry:${PassportLogicRegistry.address}\n` +
        `contractPassportFactory:${PassportFactory.address}`;

    var fs = require("fs");
    fs.writeFile(process.env.OUTPUT_FILE, data, (err) => {
        if (err) console.log(err);
        console.log("Successfully saved Monetha contract addresses to file " + process.env.OUTPUT_FILE);
        callback();
    });

    
}