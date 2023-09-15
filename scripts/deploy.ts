
import { ethers } from "hardhat";

async function main() {

  const deploy_contract = await ethers.deployContract("SecurityToken");

  await deploy_contract.waitForDeployment();

  console.log("SecurityToken is deployed to : ",await deploy_contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
