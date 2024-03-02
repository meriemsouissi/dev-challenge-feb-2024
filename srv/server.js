const cds = require("@sap/cds");


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