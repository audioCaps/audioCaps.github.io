module.exports = {
  siteMetadata: {
    title: `AudioCaps: Generating Captions for Audios in the Wild`,
    description:
      'We explore the problem of audio captioning: generating natural language description for any kind of audio in the wild.'+
      'We contribute a large-scale dataset of about 46K audio clips to human-written text pairs collected via crowdsourcing on the  AudioSet dataset.' +
      'We show that our collected captions are indeed faithful for audio inputs and discover what forms of audio representation and captioning models are effective for the audio captioning.',
    author: `Chris Dongjoo Kim, Byeongchang Kim, Hyunmin Lee, and Gunhee Kim NAACL-HLT 2019`,
    googleSiteVerification: 'RqcB2uGlZIkp71SeZhAblt-vSMOk32X_kL_5elphKZ4',
    siteUrl: 'https://audiocaps.github.io'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: ``, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
