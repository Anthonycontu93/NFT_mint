require("@nomicfoundation/hardhat-toolbox");

// dotenv reads the `.env` file and makes it available to the NodeJS Environment
let secret = require("./secret")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    // Define the sepolia network parameters here
    sepolia: {
      url: secret.url,
      accounts: [secret.key],
    }
  }
};

