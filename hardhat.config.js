const { SEPOLIA_ADDRESS_PRIVATE_KEY, ALCHEMY_API_KEY } = require("./consts/secret");

require("@nomicfoundation/hardhat-toolbox");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key


// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
// Deploying contracts with the account: 0x94ae7f2FdE0E1B9A66b7363d59A8656844a28aFc
// Token address: 0x38811464A4a6F369c6071e83446738c3E26cd688

// import SEPOLIA_PRIVATE_KEY from ".env";


module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_ADDRESS_PRIVATE_KEY]
    }
  }
};