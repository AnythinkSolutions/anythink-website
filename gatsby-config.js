module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    title: `Anythink Solutions`,
    siteUrl: `https://www.anythinksolutions.com`,
    siteTitleAlt: `Anythink Solutions - Freelance Software Development`,
    siteHeadline: `Anythink Solutions - Software Development Services`,
    siteDescription: `Freelance software development, front-end development, React, Angular`,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Nunito Sans`,
              variants: [`200`, `300`, `400`, `500`],
            },
            {
              family: `Montserrat`,
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
    }
  ]  
};
