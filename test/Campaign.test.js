const assert= require('assert');
const ganache= require('ganache-cli');
const Web3= require('web3');

const web3= new Web3(ganache.provider());

const compiledFactory=require('../ethereum/build/CampaignFactory.json');
const compiledCampaign=require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async()=>{
    accounts = await web3.eth.getAccounts();
    factory =  await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
               .deploy({data: compiledFactory.bytecode}).send({from: accounts[0], gas:'1000000'});
    
    await factory.methods.createCampaign('100').send({from: accounts[0], gas:'1000000'});   // we cannot reference this to campaign 
    addresses= await factory.methods.getDeployedCampaigns().call();
    campaignAddress= addresses[0];
    campaign = await new web3.eth
               .Contract(JSON.parse(compiledCampaign.interface),campaignAddress);   // giving address of already deployed contract
});

describe('Campaign Test :',()=>{

    it('deploys a factory and campaign',()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });
    it('marks caller as campaign manager', async()=>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    });
    it('allows people to contibute money and mark them as approvers',async()=>{
        await campaign.methods.contribute().send({from: accounts[1], value:'200'});
        const contributeCaller= await campaign.methods.approvers(accounts[1]).call();
        assert(contributeCaller);
    });
    it('requires a minimum contribution to enter campaign',async()=>{
        try{
            await campaign.methods.contribute().send({from: accounts[1], value:'5'});    //less than min. contri.
            assert(false);                                                                  // test fails if this line is reached
        }
        catch(err){
            assert(err);
        }
    });
    it('allows a manager to create a payment request', async()=>{
        await campaign.methods.createRequest('Buy adhesive', '1000', accounts[1]).send({from: accounts[0], gas: '1000000'});
        const request= await campaign.methods.requests(0).call();
        assert.equal('Buy adhesive',request.description);
    })
    it('works end-2-end', async () => {
        
        await campaign.methods
          .contribute()
          .send({
          value: web3.utils.toWei('10', 'ether'),
          from: accounts[0]
          });
        await campaign.methods.createRequest('Buy 1000 batteries',web3.utils.toWei('5', 'ether'),accounts[1]).
        send({from: accounts[0],gas: '1000000'
          });
        await campaign.methods.approveRequest(0).send({from: accounts[0],gas: '1000000'});
        let preBalance = await web3.eth.getBalance(accounts[1]);
        preBalance = web3.utils.fromWei(preBalance, 'ether');
        preBalance = parseFloat(preBalance);
        await campaign.methods
          .finalizeRequest(0).send({from: accounts[0],gas: '1000000'
          });
        let postBalance = await web3.eth.getBalance(accounts[1]);
        postBalance = web3.utils.fromWei(postBalance, 'ether');
        postBalance = parseFloat(postBalance);
        assert(postBalance > preBalance);
      });
})