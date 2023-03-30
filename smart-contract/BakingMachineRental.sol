pragma solidity ^0.8.0;

contract BakingMachineRental {
    address payable public owner;
    mapping(address => uint) public deposits;
    uint public rentalFee = 0.1 ether;
    uint public depositAmount = 0.2 ether;
    uint public rentalPeriod = 3 days;
    
    enum State { Idle, Rented, Returned }
    State public state;
    
    event BakingStarted(address renter);
    event BakingFinished(address renter, uint bakingPower, uint eggs);
    event RentalPaid(address renter, uint amount);
    event DepositRefunded(address renter, uint amount);
    
    constructor() {
        owner = payable(msg.sender);
        state = State.Idle;
    }
    
    function rent() public payable {
        require(state == State.Idle, "Machine is not available for rent");
        require(msg.value == depositAmount + rentalFee, "Insufficient payment");
        owner.transfer(rentalFee);
        deposits[msg.sender] = depositAmount;
        state = State.Rented;
        emit RentalPaid(msg.sender, msg.value);
        emit BakingStarted(msg.sender);
    }
    
    function bake(uint bakingPower, uint eggs) public {
        require(state == State.Rented, "Machine is not currently rented");
        require(msg.sender == owner, "Only the machine owner can start baking");
        state = State.Returned;
        emit BakingFinished(msg.sender, bakingPower, eggs);
    }
    
    function returnMachine() public {
        require(state == State.Returned, "Baking is not finished yet");
        uint deposit = deposits[msg.sender];
        deposits[msg.sender] = 0;
        payable(msg.sender).transfer(deposit);
        state = State.Idle;
        emit DepositRefunded(msg.sender, deposit);
    }
}
