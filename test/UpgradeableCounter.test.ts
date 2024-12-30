import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import hre from "hardhat";

describe("UpgradeableCounter", function () {
  it("Should deploy and increment the counter", async function () {
    const Counter = await hre.ethers.getContractFactory("UpgradeableCounter");
    const counter = await Counter.deploy();
    await counter.initialize(2)

    expect(await counter.getCount()).to.equal(2);

    await counter.increment();
    expect(await counter.getCount()).to.equal(3);
  });
});
