
import { ethers } from "hardhat";

const name = "MyToken";
const symbol = "MTK";
const offeringName = "New_Offering";
const offeringType = "Bonds";
const totalShares = 50;
const sharePrice = 100;
const custodian = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";

async function main() {

  const deploy_contract = await ethers.deployContract("SecurityToken", [name, symbol, offeringName, offeringType, totalShares, sharePrice, custodian]);

  await deploy_contract.waitForDeployment();

  console.log("SecurityToken is deployed to : ",await deploy_contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
