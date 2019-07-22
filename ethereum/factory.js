import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance= new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0x3D99052FCCc155092f610dF6A7F755553242e36F');

export default instance;


// to get access to our deployed instance of factory contract
// to make our work easier