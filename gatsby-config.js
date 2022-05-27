module.exports = {
    siteMetadata: {
        title: "SlimeStats",
        description: "Slime: Isekai Memories database and character information. Filter by skills, element type, and more!",
        siteUrl: `https://www.slimestats.com/`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-transformer-csv`,
        'gatsby-plugin-sass',
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
              icon: 'src/images/slimeIcon.png',
            },
          },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-Y7LQ3N7GXG", // Google Analytics / GA
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "GTM-K4R5NKQ",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    //exclude: ["/preview/**", "/do-not-track/me/too/"],
                    // Defaults to https://www.googletagmanager.com
                    origin: "https://www.googletagmanager.com",
                },
            },
        },
        
    ]
}