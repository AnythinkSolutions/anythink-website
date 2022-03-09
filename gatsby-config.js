module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    title: `Freelance Software Development from Anythink Solutions`,
    siteUrl: `https://www.anythinksolutions.com`,
    siteTitleAlt: `Anythink Solutions - Freelance Software Development`,
    siteHeadline: `Anythink Solutions - Software Development Services`,
    siteDescription: "Anythink Solutions offers full stack software development solutions including React, Angular and .NET",
    siteKeywords: ["software development", "freelance", "react", "angular", "gatsby", ".net", "react native", "brian schwalm"],
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Swift Agency`,
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.svg',
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Nunito Sans`,
              variants: [`200`, `300`, `400`, `500`],
            },
            {
              family: `Roboto`,
              variants: [`200`, `300`, `400`, `500`],
            },
          ],
        },
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }  
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }  
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-HMZEFYRJZF", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        // pluginConfig: {
        //   // Puts tracking script in the head instead of the body
        //   head: false,
        //   // Setting this parameter is also optional
        //   respectDNT: true,
        //   // Avoids sending pageview hits from custom paths
        //   exclude: ["/preview/**", "/do-not-track/me/too/"],
        //   // Defaults to https://www.googletagmanager.com
        //   origin: "YOUR_SELF_HOSTED_ORIGIN",
        // },
      },
    },
  ]  
};
