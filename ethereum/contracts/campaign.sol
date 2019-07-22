pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public{
        address newCampaign = new Campaign(minimum,msg.sender);     // deploys a campaign contract instance
        deployedCampaigns.push(newCampaign);
    }
    function getDeployedCampaigns() public view returns(address[])
    {
        return deployedCampaigns;
    }
}

contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public totalContributors;
    
    
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    function Campaign ( uint minimum, address creator ) public{
        manager= creator;
        minimumContribution = minimum;
    }
    function contribute() public payable{
        require ( msg.value > minimumContribution );
        if (!approvers[msg.sender]) {
            approvers[msg.sender] = true;
            totalContributors++;
        }
    }
    function createRequest(string description, uint value, address recipient) public restricted{
        Request memory newRequest= Request(
            {description : description,
             value : value,
             recipient : recipient,
             complete : false ,
             approvalCount : 0
            });
        requests.push(newRequest);
    }
    function approveRequest(uint index) public {
        Request storage currentRequest= requests[index];
        require(approvers[msg.sender]);
        require(!currentRequest.approvals[msg.sender]);
        currentRequest.approvalCount+=1;
        currentRequest.approvals[msg.sender]=true;
    }
    function finalizeRequest(uint index) public restricted{
        Request storage currentRequest= requests[index];
        require(!currentRequest.complete);
        require(currentRequest.approvalCount>(totalContributors/2));
        
        currentRequest.complete=true;
        currentRequest.recipient.transfer(currentRequest.value);
    }
    function getSummary() public view returns(
        uint,uint,uint,uint,address
    ){
        return(
            minimumContribution,
            this.balance,
            requests.length,
            totalContributors,
            manager
        );
    }
    function getRequestsCount() public view returns(uint){
        return requests.length;
    }

}