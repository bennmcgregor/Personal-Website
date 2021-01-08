module.exports = {
  siteMetadata: {
    title: 'Benn McGregor',
    siteUrl: `https://bennmcgregor.com`,
    description: 'Come on in!',
    author: 'Benn McGregor',
    keywords: 'benn,mcgregor,student,programmer,musician,artist',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              wrapperStyle: `float: left; width: 100%;`,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static/',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Benn McGregor Website',
        short_name: 'benn',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/general/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/general/logo.png',
      },
    },
    'gatsby-plugin-client-side-redirect' // keep it in last in list
  ],
}
