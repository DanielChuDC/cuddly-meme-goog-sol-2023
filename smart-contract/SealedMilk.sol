pragma solidity ^0.8.0;

contract MilkPayment {
    address public buyer;
    address payable public seller;
    uint public price = 1 ether;
    bool public isSealed = false;
    bool public isPaid = false;
    
    event MilkSealed(address seller);
    event PaymentMade(address buyer, uint amount);
    event PaymentRefunded(address buyer, uint amount);
    
    modifier onlySeller() {
        require(msg.sender == seller, "Only the seller can perform this action");
        _;
    }
    
    constructor(address _seller) {
        buyer = msg.sender;
        seller = payable(_seller);
    }
    
    function sealMilk() public onlySeller {
        isSealed = true;
        emit MilkSealed(msg.sender);
    }
    
    function makePayment() public payable {
        require(!isPaid, "Payment has already been made");
        require(isSealed, "Milk has not been sealed yet");
        require(msg.value == price, "Incorrect payment amount");
        seller.transfer(msg.value);
        isPaid = true;
        emit PaymentMade(msg.sender, msg.value);
    }
    
    function refundPayment() public onlySeller {
        require(isPaid, "Payment has not been made yet");
        uint refundAmount = address(this).balance;
        buyer.transfer(refundAmount);
        isPaid = false;
        emit PaymentRefunded(buyer, refundAmount);
    }
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
