const fs = require('fs-extra');     // get access to file system of our computer
const path= require('path');
const solc= require('solc');        // solidity compiler

const buildPath= path.resolve(__dirname,'build');   // path to build folder
fs.removeSync(buildPath);

const campaignPath= path.resolve(__dirname,'contracts','campaign.sol');     // path to campaign.sol
const source= fs.readFileSync(campaignPath,'utf8');
const output= solc.compile(source,1).contracts;                                   // compiling the 2 contracts inside

fs.ensureDirSync(buildPath);                                            // creating the directory which was deleted

for(let contract in output)
{
    fs.outputJsonSync(
        path.resolve(buildPath,contract.replace(':','')+'.json'), output[contract]
    )
}
