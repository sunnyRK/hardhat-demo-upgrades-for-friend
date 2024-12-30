import { expect } from "chai";
import { ethers } from "hardhat";

describe("Forking Test", function () {
  it("Should interact with a mainnet contract", async function () {
    const mainnetUSDCAddress = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
    const USDC = await ethers.getContractAt("IERC20", mainnetUSDCAddress);
    const balance = await USDC.balanceOf("0xb50685c25485CA8C520F5286Bbbf1d3F216D6989");
    console.log(`USDC Balance: ${balance}`);
    expect(BigInt(balance)).to.be.a("bigint");
    expect(balance > 0n).to.be.true;
  });
});
