require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `neural Smart Business Technologies`,
    description: `Custom smart business applications. neuralSBT - It's All Connected.`,
    keywords: 'Web, App, Application, Software, Development, Design',
  },
  plugins: [
    //{
     // resolve: `gatsby-plugin-manifest`,
      //options: {
       // name: 'Meet Brad - Freelance Dev Extraordinaire',
       // short_name: `Brad S. CV`,
       // background_color: `#ffffff`,
       // lang: `en`,
       // theme_color: `#ffffff`,
       // start_url: `/`,
       // display: `standalone`,
       // cache_busting_mode: 'none',
       // icon: `src/assets/images/icon.png`,
       // include_favicon: true,
       // icon_options: {
        //  purpose: `any maskable`,
        //}
      //}
    //},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
  ],
}
