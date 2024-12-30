# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts

npx hardhat test test/UpgradeableCounter.test.ts --network baseMainnet
npx hardhat test test/Forking.test.ts --network baseMainnet
npx hardhat --network localhost run ignition/modules/upgrade.ts
npx hardhat --network localhost run ignition/modules/deploy.ts      
npx hardhat script run  ./ignition/modules/Lock.ts --network localhost  
```
