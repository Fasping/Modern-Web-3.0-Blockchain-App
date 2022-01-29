// https://eth-ropsten.alchemyapi.io/v2/57j6GWmLFNwQwzoAfSg4xJPglszrLv8u

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/57j6GWmLFNwQwzoAfSg4xJPglszrLv8u",
      accounts: [
        "62b546234854ef3e337c98c8aa836e599f762b1d6cdccbeff0b8a77617fb27d8",
      ],
    },
  },
};