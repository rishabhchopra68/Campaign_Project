import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';     //Link : react component which allows us to render anchor tags into our react components
                                    //       and navigate around the app.

export default ()=>{
    return(
        <div>
            <Menu style={{margin:'10px'}}>
                <Link route='/'>
                    <a className='item'>
                        Crowdcoin
                    </a>
                </Link>
                <Menu.Menu position="right">
                <Link route='/'>
                    <a className='item'>
                        Campaigns
                    </a>
                </Link>
                <Link route='/campaigns/new'>
                    <a className='item'>
                        +
                    </a>
                </Link>
                </Menu.Menu>
            </Menu>
        </div>
    )
}