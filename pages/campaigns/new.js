import React from 'react';
import Layout from '../../components/layout';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

import {Link,Router} from '../../routes';   //Link : react component which allows us to render anchor tags into our react components
                                            //       and navigate around the app.
                                            //Router: programatically navigate from one page to another
                                            // here, link tag is not required as this pg doesnt have any links to nav. 

class CampaignNew extends React.Component{

    onSubmit= async(event)=>{
        event.preventDefault();     // prevents data to be sent to backend server
        this.setState({loading: true, errorMessage:''});
        
        try{
            const accounts= await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]           // gas is calc automatically by metamask here 
        })
        Router.pushRoute('/');              // after successful trans. , we are redirected to home page
        }
        catch(err){
            this.setState({errorMessage: err.message})
        }
        this.setState({loading: false})
    }
    state={
        minimumContribution :'',
        errorMessage : '',
        loading : false
    }
    render(){
        return(
            <Layout>
                <h3>Create a Campaign</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>           {/* we add error here to show the error msg as sem-ui assumes no error is present initially*/}
                <Form.Field>
                    <label> Minimum Contribution </label>
                    <Input
                        label='wei'
                        labelPosition='right'
                        fluid={true}
                        value={this.state.minimumContribution}
                        onChange= {event => this.setState({minimumContribution : event.target.value})}
                    >
                    </Input>
                </Form.Field>
                <Button primary={true} loading={this.state.loading}>
                    CREATE !
                </Button>
                <Message error header="Oops !" content={this.state.errorMessage}>  
                </Message>                              {/*only displayed when something goes wrong*/}
            </Form>
            </Layout>
        );
    }
}

export default CampaignNew;