import React from 'react';
import Header from './header';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
export default (props)=>{
    return(
    <Container>
            <Head>          
                                                                        {/* the link is moved to head of out html doc */}
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
            </Head>
        <Header/>
        {props.children}
    </Container>
    )}