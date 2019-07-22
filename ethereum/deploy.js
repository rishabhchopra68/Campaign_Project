const HDWalletProvider=require('truffle-hdwallet-provider');
const compiledFactory =require('./build/CampaignFactory.json');
const Web3= require('web3');

const provider= new HDWalletProvider('solve ugly flock artwork approve myself valley view toward wolf toast artwork'
,"https://rinkeby.infura.io/v3/01d1dec890644cb2b269d0d86c6b54ef");

const web3= new Web3(provider);
web3.setProvider(provider);
let account;
const deploy= async () => {
    account= await web3.eth.getAccounts();
    console.log('attempting to deploy contract from', account[0] );
    const result=await new web3.eth.Contract(JSON.parse( compiledFactory.interface )).deploy({ data: compiledFactory.bytecode })
    .send({from: account[0], gas: '1000000'});
    
    console.log('Contract deployed to ', result.options.address );
};
deploy();

