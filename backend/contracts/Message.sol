// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Message {
    string private message;

    constructor(string memory _message) {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
