const routes= require('next-routes')(); // () is for invoking the func returned

routes
    .add('/campaigns/new','/campaigns/new')             // without this, our original next.js routing for new campaign pg gets overwritten
    .add('/campaigns/:address','/campaigns/show')
    .add('/campaigns/:address/requests','/campaigns/requests/index')
    .add('/campaigns/:address/requests/new','/campaigns/requests/new');

module.exports= routes;


// this file is created to handle dynamic routing 