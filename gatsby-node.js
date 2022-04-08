// gatsby-node.js

exports.createPages = async function ({ actions, graphql }) {
    const data = graphql(`
    query {
        allSlimerippedCsv {
            nodes {
                Name
            }
        }
    }`).then(results => {
        results.data.allSlimerippedCsv.nodes.forEach(item => {
            actions.createPage({
                path: "/characterDetailsPage/" + item.Name,
                component: require.resolve(`./src/pages/characterDetailsPage.js`),
                context: { Name: item.Name },
            });
        });
    })

    const protectionData = graphql(`
    query {
        allSlimerippedProtectionCsv {
            nodes {
                Name
            }
        }
    }`).then(results => {
        results.data.allSlimerippedProtectionCsv.nodes.forEach(item => {
            actions.createPage({
                path: "/protectorDetailsPage/" + item.Name,
                component: require.resolve(`./src/pages/protectorDetailsPage.js`),
                context: { Name: item.Name },
            })
        })
    })

    return Promise.all([data, protectionData]);
}