import React from 'react';
import factory from '../ethereum/factory';
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/layout';
import {Link} from '../routes';


class CampaignIndex extends React.Component{

  static async getInitialProps(){                                           // used for fetching data from eth world using next server
    const campaigns= await factory.methods.getDeployedCampaigns().call();   
    return {campaigns: campaigns};                                          // getInitialProps() returns an object and passes that as props 
                                                                            // to component
  }

  // async componentDidMount(){
  //   console.log(campaigns[0]);
  // };
  renderCampaigns(){
    const items= this.props.campaigns.map(address=>{    // looping over campaigns and assigning each object to items array
      return{
        header: address,
        description: <Link route={`/campaigns/${address}`}><a>View Campaigns</a></Link>,
        fluid: true
      }
    })
    

    return <Card.Group items={items} />
  }

  render(){
    
    return( 
    <Layout>
      <div>                                 {/*all this is passed to layout component*/}
        <h3>Open Campaigns</h3>
        <Link route='/campaigns/new'>
          <a>
              <Button 
                floated='right'
                content='Create Campaign'
                icon='add circle'
                primary={true}>
              </Button>         
          </a>
        </Link>
        
        {this.renderCampaigns()}

      </div>
    </Layout>  
    )}
}


export default CampaignIndex;