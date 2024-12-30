import { ethers, upgrades } from "hardhat";

async function main() {
  // Address of the deployed proxy
  const proxyAddress = "0x4CF4dd3f71B67a7622ac250f8b10d266Dc5aEbcE";

  // Get the contract factory for the new implementation
  const UpgradeableCounterV2 = await ethers.getContractFactory("UpgradeableCounter");

  // Upgrade the proxy to the new implementation
  console.log("Upgrading UpgradeableCounter...");
  const upgradedCounter = await upgrades.upgradeProxy(proxyAddress, UpgradeableCounterV2);

  // Log the address of the upgraded proxy
  const counterAddress = await upgradedCounter.getAddress();
  console.log("UpgradeableCounter upgraded. Proxy address remains:", counterAddress);
}

main().catch((error) => {
  console.error("Error during upgrade:", error);
  process.exit(1);
});
