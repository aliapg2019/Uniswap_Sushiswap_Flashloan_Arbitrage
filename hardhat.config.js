require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  mocha: {
    timeout: 100000000,
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.INFURA_MAINNET,
      },
    },
    testnet: {
      url: process.env.ALCHEMY_TESTNET,
      chainId: 4,
      accounts: [
        process.env.TESTNET_ACCOUNT,
      ],
    },
    mainnet: {
      url: process.env.ETH_ALCHEMY_MAINNET,
      chainId: 1,
      accounts: [
        process.env.MAINNET_ACCOUNT,
      ],
    },
  },
};
