import Web3 from 'web3';

let web3;

if( typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ){        
    // we are in browser and user is running metamask i.e. web3 is injected by metamask.
    web3= new Web3(window.web3.currentProvider);
}
else{
    // we are on server 'OR' user is not running metamask
    const provider= new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/01d1dec890644cb2b269d0d86c6b54ef');
    web3= new Web3(provider);
}

const getProvider = async () => {

    await window.web3.currentProvider.enable(); // request authentication
    
    };
    
    getProvider();

export default web3;