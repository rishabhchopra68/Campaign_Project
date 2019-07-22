import React from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import {Card,Grid,Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';
import {Link} from '../../routes';

class showCampaign extends React.Component{
    
    static async getInitialProps(props)             // this props is different 
    {
        const campaign= Campaign(props.query.address);           // address is the token property from the url
        const summary= await campaign.methods.getSummary().call();      // an object is returned , not an array
        
        return {
            address : props.query.address,
            minimumContribution : summary[0],
            balance : summary[1],
            requestsCount : summary[2],
            approversCount : summary[3],
            manager : summary[4]
        };
        
    }
    renderCards()
    {
        const items=[
            {
                header: this.props.manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can send requests to withdraw money',
                style : {overflowWrap:'break-word'}
            },
            {
                header: this.props.minimumContribution,
                meta :'Minimum Contribution (wei)',
                description: 'You must contribute atleast this much wei to become an approver'
            },
            {
                header: this.props.requestsCount,
                meta :'Number of Requests',
                description: 'A request tries to withdraw money from the contract. They must be approved by approvers.'
            },
            {
                header: this.props.approversCount,
                meta :'Number of Approvers',
                description: 'Number of people who have donated to the campaign'
            },
            {
                header: web3.utils.fromWei(this.props.balance,'ether'),
                meta :'Campaign Balance (ether)',
                description: 'Amount of money campaign has to spend'
            }
        ]
        return <Card.Group items={items}/>;
    }
    
    render()
    {
        return(
            <Layout>
                <h3>Show Campaign</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>
                                    View Requests
                                    </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
            </Layout>
        )
    }
}

export default showCampaign;