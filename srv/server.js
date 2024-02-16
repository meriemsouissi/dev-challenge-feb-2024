const cds = require("@sap/cds");
const cov2ap = require("@cap-js-community/odata-v2-adapter");
const GraphQLAdapter = require("@cap-js/graphql/lib/GraphQLAdapter");
const graphql = require("@cap-js/graphql");


cds.on('serving', srv => {
    
    if (srv.name === 'CatalogService'){
        const provider = (entity) => {
            if (entity) return 
            return { href: 'graphql', name: 'GraphQl', title: 'GraphQL' }
        }
        srv.$linkProviders ? srv.$linkProviders.push(provider) : srv.$linkProviders = [provider]
    }
    
});


module.exports = cds.server;