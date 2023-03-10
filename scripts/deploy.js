
const { ethers } = require("hardhat");

async function main() {

  const Certificate = await ethers.getContractFactory("Airdrop_NFT_Collection");
  const certificate = await Certificate.deploy("Air Drop NFT Collection","ADR");

  await certificate.deployed();
  console.log("Success! Contract was deployed to: ", certificate.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });