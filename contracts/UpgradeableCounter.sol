// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract UpgradeableCounter is Initializable {
    uint256 private _count;

    function initialize(uint256 initialCount) public initializer {
        _count = initialCount;
    }

    function increment() public {
        _count += 1;
    }

    function getCount() public view returns (uint256) {
        return _count;
    }
    
    function getCount2() public view returns (uint256) {
        return _count+1;
    }
}
