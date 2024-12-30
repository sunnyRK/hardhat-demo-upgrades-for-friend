import { ethers, upgrades } from "hardhat";

async function main() {
  // Get the contract factory for UpgradeableCounter
  const UpgradeableCounter = await ethers.getContractFactory("UpgradeableCounter");

  // Deploy a proxy for the UpgradeableCounter contract
  console.log("Deploying UpgradeableCounter...");
  const counter = await upgrades.deployProxy(UpgradeableCounter, [0], {
    initializer: "initialize",
  });

  // Wait for deployment to complete
  await counter.waitForDeployment();

  // Log the address of the deployed proxy
  const counterAddress = await counter.getAddress();
  console.log("UpgradeableCounter deployed to:", counterAddress);
}

main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exit(1);
});
