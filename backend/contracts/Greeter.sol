// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Greeter {
    string public greeting = "Hello Breyy";

    function setGreeting(string memory _greet) public {
        greeting = _greet;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }
}
