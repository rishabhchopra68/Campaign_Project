import React from 'react';
import {Form,Input,Button,Message} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';

class contributeForm extends React.Component{
    state={
        value: '',
        loading: false,
        errorMessage: ''
    }
    
    onSubmit= async event=>{
        event.preventDefault();
        
        const campaign= Campaign(this.props.address);

        try{
            const accounts= await web3.eth.getAccounts();
            this.setState({errorMessage:'',loading: true})
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value,'ether')
            })
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        }
        catch(err){
            this.setState({errorMessage: err.message})
        }
        this.setState({value:'',loading: false})
    }

    
    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!! this.state.errorMessage}>
                <Form.Field>
                    <label>
                        Amount to Contribute
                    </label>
                    <Input label='ether' labelPosition='right' value={this.state.value } 
                    onChange={event=> this.setState({value: event.target.value})
                    }/>
                </Form.Field>
                <Message error header='Oops' content={this.state.errorMessage}/>
                <Button primary ={true} loading={this.state.loading}>
                    Contribute
                </Button>
            </Form>
        )
    }
}

export default contributeForm;

