'use strict';

var routes = require('next-routes')(); // () is for invoking the func returned

routes.add('/campaigns/new', '/campaigns/new') // without this, our original next.js routing for new campaign pg gets overwritten
.add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;

// this file is created to handle dynamic routing
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVEsQUFBZCxBLDBCQUF3Qzs7QUFFeEMsT0FDSyxBQURMLElBQ1MsQUFEVCxrQkFDMEIsQUFEMUIsa0JBQ3dELEFBRHhEO0NBRUssQUFGTCxJQUVTLEFBRlQsdUJBRStCLEFBRi9CLG1CQUdLLEFBSEwsSUFHUyxBQUhULGdDQUd3QyxBQUh4Qyw2QkFJSyxBQUpMLElBSVMsQUFKVCxvQ0FJNEMsQUFKNUM7O0FBTUEsT0FBTyxBQUFQLFVBQWdCLEFBQWhCOztBQUdBIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ERUxML2tpY2tzdGFydCJ9